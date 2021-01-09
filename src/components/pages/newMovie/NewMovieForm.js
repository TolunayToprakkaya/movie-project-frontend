import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Button, Form, Image, Message } from 'semantic-ui-react'
import InlineError from './InlineError';

class NewMovieForm extends Component {
    constructor(props) {
        super(props);
        console.log("NewMovieForm.js -> constructor(props) -> ", props);
    }

    static propTypes = {
        newMovie: PropTypes.object.isRequired,
        movie: PropTypes.object.isRequired,
        newMovieCreate: PropTypes.func.isRequired,
        updateMovie: PropTypes.func.isRequired
    };

    state = {
        movieId: this.props.movie ? this.props.movie.movieId : '',
        name: this.props.movie ? this.props.movie.name : '',
        title: this.props.movie ? this.props.movie.title : '',
        cover: this.props.movie ? this.props.movie.cover : '',
        errors: {},
        redirect: false
    };

    componentWillReceiveProps(nextProps) {
        const { movie } = nextProps.newMovie;
        if (movie.title && movie.title !== this.state.title) {
            this.setState({
                movieId: movie.movieId,
                name: movie.name,
                title: movie.title,
                cover: movie.cover,
            });

        }
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    onSubmit = () => {
        const errors = this.validate();
        this.setState({
            errors: errors,
            redirect: true
        });

        const movieId = this.state.movieId;

        if (Object.keys(errors).length === 0) {
            if (!movieId) {
                this.props.newMovieCreate(this.state);
            } else {
                this.props.updateMovie({ ...this.state, movieId });
            }
        }
    };

    validate = () => {
        const errors = {};
        if (!this.state.name)
            errors.name = "Name can't be blank!";
        if (!this.state.title)
            errors.title = "Title can't be blank!";
        if (!this.state.cover)
            errors.cover = "Cover can't be blank!";

        return errors;
    };

    render() {
        console.log("NewMovieForm.js -> this.state -> ", this.state);
        const {errors} = this.state;
        const form = (
            <Form onSubmit={this.onSubmit} loading={this.props.newMovie.fetching || this.props.newMovie.movie.fetching}>
                <Form.Field error={!!errors.name}>
                    <label>Name</label>
                    {errors.name && <InlineError message={errors.name}/>}
                    <input
                        id={"name"}
                        name={"name"}
                        value={this.state.name}
                        onChange={this.handleChange}
                        placeholder='Name'/>
                </Form.Field>
                <Form.Field error={!!errors.title}>
                    <label>Title</label>
                    {errors.title && <InlineError message={errors.title}/>}
                    <input
                        id={"title"}
                        name={"title"}
                        value={this.state.title}
                        onChange={this.handleChange}
                        placeholder='Title'/>
                </Form.Field>
                <Form.Field error={!!errors.cover}>
                    <label>Cover</label>
                    {errors.cover && <InlineError message={errors.cover}/>}
                    <input
                        id={"cover"}
                        name={"cover"}
                        value={this.state.cover}
                        onChange={this.handleChange}
                        placeholder='Cover'/>
                </Form.Field>
                <Image src={this.state.cover} size='small'/>
                <div className={"clearFix"}></div>
                <Button type='submit'>Submit</Button>
                {
                    this.props.newMovie.error.response
                    &&
                    (
                        <Message negative>
                            <Message.Header>We're sorry</Message.Header>
                            <p>A problem occurred while recording.</p>
                        </Message>
                    )
                }
            </Form>
        );

        return (
            <div>
                {
                    this.props.newMovie.done && this.state.redirect ? <Redirect to="/movies" /> : form
                }
            </div>
        );
    }
}

export default NewMovieForm;

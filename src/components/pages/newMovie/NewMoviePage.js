/*
import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import NewMovieForm from "./NewMovieForm";
import {newMovieCreate, fetchMovieById} from "../../../actions/newMovieAction";

class NewMoviePage extends Component {
    constructor(props) {
        super(props);
        console.log("NewMoviePage.js -> constructor(props) -> ", props);
    }
    static propTypes = {
        newMovie: PropTypes.object.isRequired
    }

    render() {
        return(
            <div>
                <h2>New Movie</h2>
                <NewMovieForm
                    newMovie={this.props.newMovie}
                    movie={this.props.movie}
                    newMovieCreate={this.props.newMovieCreate}/>
            </div>
        )
    }

    //Update İşleminde Sayfa Yenilendiğinde İnputların Kaybolmasını Engellemek İçin
    componentDidMount() {
        const {match} = this.props;
        if (!this.props.movie && match.params.movieId) {
            this.props.fetchMovieById(match.params.movieId);
        }
    }
}

//Kullanılan Reducerlar Yazılır
const mapStateToProps = (state, props) => {
    return {
        newMovie: state.newMovie,
        //Update Butonuna Basıldıktan Sonra New Movie Sayfasının Inputlarının Dolu Gelmesi İçin
        movie: state.movies.movieList.find(item => item.movieId === props.match.params.movieId)
    }
};


//Kullanılan Actionlar Yazılır
const mapDispatchToProps = {
    newMovieCreate,
    fetchMovieById
};

export default connect(mapStateToProps, mapDispatchToProps)(NewMoviePage);
*/
import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import NewMovieForm from "./NewMovieForm";
import {newMovieCreate, fetchMovieById, updateMovie} from "../../../actions/newMovieAction";

class NewMoviePage extends Component {
    constructor(props) {
        super(props);
        console.log("NewMoviePage.js -> constructor(props) -> ", props);
    }

    static propTypes = {
        newMovie: PropTypes.object.isRequired
    }

    render() {
        return (
            <div>
                <h2>New Movie</h2>
                <NewMovieForm
                    newMovie={this.props.newMovie}
                    movie={this.props.movie}
                    newMovieCreate={this.props.newMovieCreate}
                    updateMovie={this.props.updateMovie}/>
            </div>
        );
    }

    //Update İşleminde Sayfa Yenilendiğinde İnputların Kaybolmasını Engellemek İçin
    componentDidMount() {
        const {match} = this.props;
        if (!this.props.movie && match.params.movieId) {
            this.props.fetchMovieById(match.params.movieId);
        }
    }
}

//Kullanılan Reducerlar Yazılır

const mapStateToProps = (state, props) => {
    return {
        newMovie: state.newMovie,
        //Update Butonuna Basıldıktan Sonra New Movie Sayfasının Inputlarının Dolu Gelmesi İçin
        movie: state.movies.movieList.find(item => item.movieId === props.match.params.movieId)
    }
};


/*
const mapStateToProps = ({newMovie, movies}, props) => {
    return {
        newMovie,
        movie: movies.movieList.find(item => item.movieId === props.match.params.movieId)
    }
};
*/
//Kullanılan Actionlar Yazılır
const mapDispatchToProps = {
    newMovieCreate,
    fetchMovieById,
    updateMovie
};

export default connect(mapStateToProps, mapDispatchToProps)(NewMoviePage);

import React,{Component} from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import MovieList from "./MovieList";
import {fetchMovies, deleteMovie} from "../../../actions/moviesAction"

class MoviesPage extends Component {
    constructor(props) {
        super(props);
        console.log("MoviesPage.js -> constructor(props) -> ", props);
    }
    static propTypes = {
        movies: PropTypes.object.isRequired,
        deleteMovie: PropTypes.func.isRequired
    }

    render() {
        return(
            <div>
                <h1>Movies</h1>
                <MovieList
                    movies={this.props.movies}
                    deleteMovie={this.props.deleteMovie}/>
            </div>
        )
    }

    componentDidMount() {
        this.props.fetchMovies();
    }
}

//Kullanılan Reducerlar Yazılır
const mapStateToProp = state => {
    return {
        movies: state.movies
    }
};

//Kullanılan Actionlar Yazılır
const mapDispatchToProp = {
    fetchMovies,
    deleteMovie
};

export default connect(mapStateToProp, mapDispatchToProp)(MoviesPage);
import React from "react";
import PropTypes from 'prop-types';
import MovieCard from "./MovieCard";
import {Grid} from "semantic-ui-react";
import {HashLoader} from "react-spinners";

//movies = reducer
const MovieList = ({ movies, deleteMovie }) => {
    const emptyList = (
        <p>There are no movies yet.</p>
    );

    const movieList = (
        <div>
            <HashLoader
                color={"#36bdb3"}
                loading={movies.fetching}/>
            {
                movies.error.response ?
                    <h3>Error retrieving data!</h3> :
                    <Grid stackable columns={3}>
                        {
                            movies.movieList.map(movie =>
                                <MovieCard
                                    key={movie.movieId}
                                    movie={movie}
                                    deleteMovie={deleteMovie}/>
                            )
                        }
                    </Grid>
            }
        </div>
    );

    return(
        <div>
            {
                movies.length === 0 ? emptyList : movieList
            }
        </div>
    )
};

MovieList.propTypes = {
    movies: PropTypes.shape({
        movieList: PropTypes.array.isRequired
    }).isRequired,
    deleteMovie: PropTypes.func.isRequired
};

export default MovieList;
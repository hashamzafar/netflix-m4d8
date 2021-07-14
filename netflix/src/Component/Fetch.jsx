
import React from "react";



const FetchMovies = async () => {
    let response = await fetch(
        `http://www.omdbapi.com/?apikey=85e81b2b&s="${this.props.title.toLowerCase()}"&type=movie&page=1`
    );
    let movies_json = await response.json();
    this.setState({ movies: movies_json }, () =>
        console.log(this.state.movies.Search)
    );
};
export default FetchMovies;
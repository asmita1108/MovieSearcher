import "../../src/App.css";
import React, { Component } from "react";
import NavBar from "./common/NavBar";
import SearchBar from "./common/SearchBar";
import MovieList from "./MovieList";
import Pagination from "./Pagination";
import MovieInfo from "./MovieInfo";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchTerm: "",
      totalResults: 0,
      currentPage: 1,
      currentMovie: null,
    };
    //this.apiKey = process.env.REACT_APP_API;
    this.apiKey = "645101f469947c0fc4c4c43f8cc53596";
  }

  handleSubmit = (e) => {
    e.preventDefault();

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        this.setState({
          movies: [...data.results],
          totalResults: data.total_results,
        });
      });
  };

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value,
    });
  };

  nextPage = (pageNumber) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}&page=${pageNumber}`
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        this.setState({ movies: [...data.results], currentPage: pageNumber });
      });
  };

  viewMovieInfo = (id) => {
    const filterMovie = this.state.movies.filter((movie) => movie.id === id);

    const newCurrentMovie = filterMovie.length > 0 ? filterMovie[0] : null;

    this.setState({ currentMovie: newCurrentMovie });
  };

  closeMovieInfo = () => {
    this.setState({
      currentMovie: null,
    });
  };

  render() {
    const numberPages = Math.floor(this.state.totalResults / 20);
    return (
      <div className="App">
        <NavBar />
        {this.state.currentMovie == null ? (
          <div>
            <SearchBar
              handleSubmit={this.handleSubmit}
              handleChange={this.handleChange}
            />
            <MovieList
              viewMovieInfo={this.viewMovieInfo}
              movies={this.state.movies}
            />
          </div>
        ) : (
          <MovieInfo
            currentMovie={this.state.currentMovie}
            closeMovieInfo={this.closeMovieInfo}
          />
        )}

        {this.state.totalResults > 20 && this.state.currentMovie == null ? (
          <Pagination
            pages={numberPages}
            nextPage={this.nextPage}
            currentPage={this.state.currentPage}
          />
        ) : null}
      </div>
    );
  }
}

export default App;

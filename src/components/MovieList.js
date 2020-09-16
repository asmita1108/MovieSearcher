import React, { Component } from "react";
import Movie from "./Movie";

const MovieList = (props) => {
  return (
    <div className="container">
      <div className="row">
        {props.movies.map((movie, i) => {
          return (
            <Movie
              key={i}
              viewMovieInfo={props.viewMovieInfo}
              movieId={movie.id}
              image={movie.poster_path}
            />
          );
        })}
      </div>
    </div>
  );
};
export default MovieList;
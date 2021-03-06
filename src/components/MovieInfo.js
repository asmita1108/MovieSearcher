import React from "react";

const MovieInfo = (props) => {
  return (
    <div className="container">
      <div
        className="row"
        onClick={props.closeMovieInfo}
        style={{ cursor: "pointer", paddingTop: 50 }}
      >
        <img src="arrow-left.png" alt="Icon" />
        <span className="backtext">Go back</span>
      </div>

      <div className="row">
        <div className="col s12 m4">
          {props.currentMovie.poster_path == null ? (
            <img
              src="Default.jpg"
              alt="Poster"
              style={{ width: "100%", height: 360 }}
            />
          ) : (
            <img
              src={`https://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`}
              alt="Poster"
              style={{ width: "100%", height: 360 }}
            />
          )}
        </div>

        <div className="col s12 m8">
          <div className="info-container">
            <p className="movie-title">{props.currentMovie.title}</p>
            <p>
              {props.currentMovie.release_date
                .substring(5)
                .split("-")
                .concat(props.currentMovie.release_date.substring(0, 4))
                .join("/")}
            </p>
            <p>{props.currentMovie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieInfo;

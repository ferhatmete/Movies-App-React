import React from "react";

function Row({ movies, baseUrl, title }) {
  return (
    <div className="row">
      <div className="row__header">
        <h4>{title}</h4>
      </div>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="row__poster"
            src={`${baseUrl}${movie.poster_path}`}
            alt={movie.name}
          ></img>
        ))}
      </div>
    </div>
  );
}

export default Row;

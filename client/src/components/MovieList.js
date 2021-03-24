import React from "react";
import { useRouteMatch, useHistory } from "react-router-dom";

function MovieList(props) {
  const movie = props.movie;
  const history = useHistory();
  let match = useRouteMatch();

  let title = "";
  if (movie.title !== movie.original_title) {
    title = (
      <>
        <h1>{movie.title}</h1>
        <hr></hr>
      </>
    );
  }

  let poster = "";
  if (movie.poster_path) {
    poster = (
      <img
        alt="Poster"
        src={"http://image.tmdb.org/t/p/w342" + movie.poster_path}
      ></img>
    );
  } else {
    poster = (
      <img
        alt="Poster"
        src="https://www2.kanazawa-it.ac.jp/moriken/Student/Noimg.jpg"
      ></img>
    );
  }

  function handleClickDetail(event, movieId) {
    event.preventDefault();
    history.push(`${match.path}${movieId}`);
  }

  return (
    <tr className="p-5">
      <td className="p-5">{poster}</td>
      <td className="p-5">
        <h1>{movie.original_title}</h1>
        <hr></hr>
        {title}
        <h4>&emsp;&emsp;{movie.overview}</h4>
        <hr></hr>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-primary"
            onClick={(event) => handleClickDetail(event, movie.id)}
          >
            DETAIL
          </button>
        </div>
      </td>
    </tr>
  );
}

export default MovieList;

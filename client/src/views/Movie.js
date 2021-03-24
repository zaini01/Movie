import MovieList from "../components/MovieList";
import { useState, useEffect, useCallback } from "react";
import { fetchMovie, setError } from "../store/actions/movieAction";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import debounce from "lodash.debounce";
require("dotenv").config();

function Movie() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie.movies);
  const error = useSelector((state) => state.movie.error);
  const loading = useSelector((state) => state.movie.loading);

  useEffect(() => {
    if (movies.length === 0) {
      dispatch(
        fetchMovie()
      );
    }
  }, [dispatch,movies.length]);

  const debouncedSave = useCallback(
    debounce(
      (nextValue) =>
        dispatch(
          fetchMovie(nextValue)
        ),
      1000
    ),
    []
  );

  const changeTitle = (event) => {
    const { value: nextValue } = event.target;
    setTitle(nextValue);
    if (nextValue) {
      debouncedSave(nextValue);
    }
  };

  if (error) {
    Swal.fire({
      title: "Error!",
      text: error,
      icon: "error",
    });
    dispatch(setError(""));
  }

  if (loading) {
    return (
      <div className="d-flex justify-content-center p-5 m-5">
        <div
          className="spinner-border"
          style={{ width: 300, height: 300, color: "lightblue" }}
          role="status"
        ></div>
      </div>
    );
  }

  return (
    <div className="container p-5">
   
      <div className="d-flex justify-content-center pb-5">
        <input
          value={title}
          onChange={(event) => changeTitle(event)}
          placeholder="movie title"
        ></input>
      </div>
      <table>
        <thead></thead>
        <tbody>
          {movies.map((movie) => {
            return <MovieList key={movie.id} movie={movie} />;
          })}
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
}

export default Movie;

export function fetchMovie(title) {
  return async (dispatch) => {
    console.log(title);
    try {
      dispatch(setLoadingStart());
      let response
      if (!title) {
        response = await fetch('http://localhost:3000/').then(handleErrors);
      } else {
        response = await fetch(`http://localhost:3000/movie/title/${title}`).then(handleErrors);
      }
      const movies = await response.json();

      if (movies.length > 0) {
        dispatch(setMovies(movies));
      } else {
        dispatch(setError("Movie title not found."));
      }

      dispatch(setLoadingStop());
    } catch (error) {
      dispatch(setError("Error fetching movies"));
      dispatch(setLoadingStop());
    }
  };
}

export function setMovies(movies) {
  return {
    type: "FETCH_MOVIE",
    payload: movies,
  };
}

export function setLoadingStart() {
  return {
    type: "LOADING_MOVIE_START",
  };
}

export function setLoadingStop() {
  return {
    type: "LOADING_MOVIE_STOP",
  };
}

export function setError(error) {
  return {
    type: "ERROR",
    peyload: error,
  };
}

function handleErrors(res) {
  if (!res) throw new Error(res.error);
  return res;
}

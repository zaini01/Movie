import { useState, useEffect } from "react";
import Swal from "sweetalert2";

function useFetch(movieId) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  function handleErrors(res) {
    if (!res) throw new Error(res.error);
    return res;
  }

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3000/movie/id/${movieId}`, {
      method: "GET",
    })
    .then((res) => res.json())
    .then(handleErrors)
    .then((data) => {
      if (data) {
        setMovies(data);
      }
      setLoading(false);
    })
    .catch((err) => {
      Swal.fire({
        title: "Error!",
        text: err,
        icon: "error",
      });
      setLoading(false);
    });
  }, [movieId]);
  return { movies, setMovies, loading, setLoading };
}

export default useFetch;

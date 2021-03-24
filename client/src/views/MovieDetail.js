import { useParams } from "react-router-dom";
import useFetch from "../hooks/fetch";
require("dotenv").config();

function MovieDetail() {
  const { id } = useParams();

  let { movies, loading } = useFetch(id);

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

  let backdrop;
  if (movies.backdrop_path) {
    backdrop = (
      <img
        alt="backdrop"
        src={"http://image.tmdb.org/t/p/w342" + movies.backdrop_path}
      ></img>
    );
  } else {
    backdrop = "";
  }

  let backdrop2;
  let poster;
  if (movies.belongs_to_collection) {
    if (movies.belongs_to_collection.backdrop_path) {
      backdrop2 = (
        <img
          alt="backdrop"
          src={
            "http://image.tmdb.org/t/p/w342" +
            movies.belongs_to_collection.backdrop_path
          }
        ></img>
      );
    } else {
      backdrop2 = "";
    }
    if (movies.belongs_to_collection.poster_path) {
      poster = (
        <img
          alt="poster"
          src={
            "http://image.tmdb.org/t/p/w342" +
            movies.belongs_to_collection.poster_path
          }
        ></img>
      );
    } else {
      poster = "";
    }
  }
  
  let genres ='' 
  if (movies.genres) {
    movies.genres.forEach(genre => {
      if (genres === '') {
        genres += genre.name
      } else {
        genres += ', ' + genre.name
      }
    });
  }

  let casts = []
  if (movies.credits) {
    casts = movies.credits.cast
    console.log(casts);
  }

  return (
    <div className="pt-5">
      <div className="d-flex justify-content-center">
        <h1>{movies.original_title}</h1>
      </div>

      <hr></hr>
      <div className="d-flex p-5">
        <div>
          {poster}
          <br></br>
          <br></br>
          {backdrop}
          <br></br>
          <br></br>
          {backdrop2}
        </div>
        <div className="px-5">
          <h3>{movies.title}</h3>
          <h3>Realease {movies.release_date}</h3>
          <h3>Popularity {movies.popularity}</h3>
          <h3>Vote {movies.vote_average}</h3>
          <h3>Genre {genres}</h3>
          <hr></hr>
          <h3>&emsp;&emsp;{movies.overview}</h3>
          <hr></hr>
          <h3>{movies.tagline}</h3>
          <div>
            <div className="row">
              {casts.map(cast=>{
                return (
                  cast.profile_path?(
                    <div className="col col-4 p-3 text-center">
                      <h5>{cast.name}</h5>
                      <img alt={cast.name} src={"http://image.tmdb.org/t/p/w185" + cast.profile_path } />
                      <h5>{cast.character}</h5>
                    </div>
                  ):""
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;

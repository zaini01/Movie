const initialState = {
  movies: [],
  error: "",
  loading: false,
};

function movieReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_MOVIE":
      return { ...state, movies: action.payload };
    case "LOADING_MOVIE_START":
      return { ...state, loading: true };
    case "LOADING_MOVIE_STOP":
      return { ...state, loading: false };
    case "ERROR":
      return { ...state, error: action.peyload };
    default:
      return state;
  }
}
export default movieReducer;

import { createStore, combineReducers, applyMiddleware } from "redux";
import movieReducer from "./reducers/movieReducer";
import logger from "./middleware/logger";
import thunk from "redux-thunk";

const reducer = combineReducers({
  movie: movieReducer
});

let store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;

import "./App.css";
import Movie from "./views/Movie";
import MovieDetail from "./views/MovieDetail";
import { Provider } from "react-redux";
import store from "./store/index";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {

  return (
    <Provider store={store}>
      <Router>
        <div className="d-flex justify-content-center container-fluit sticky-top bg-dark">
          <nav className="">
            <div className="btn-group p-2">
              <Link to="/">
                <button type="button" className="btn btn-outline-primary">
                  HOME
                </button>
              </Link>
            </div>
          </nav>
        </div>

        <Switch>
          <Route exact path="/">
            <Movie />
          </Route>
          <Route path="/:id">
            <MovieDetail />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;

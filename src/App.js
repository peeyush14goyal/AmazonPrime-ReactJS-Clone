import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllContent from "./components/AllContent";
import Movie from "./components/Movie/index";
import requests from "./requests";
import tvrequests from "./tvRequests";
import homeRequests from "./homeRequests";
import TV from "./components/TV/index";

function App() {
  const api_key = "989a8027930013244e3c2af17088dcac";
  return (
    <Router>
      <div className="App">
        <Header />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Home
                  api_key={api_key}
                  requests={homeRequests}
                  slideShowUrl="https://api.themoviedb.org/3/trending/all/day"
                />
              )}
            />
            <Route
              exact
              path="/movies"
              render={() => (
                <Home
                  api_key={api_key}
                  requests={requests}
                  slideShowUrl={`https://api.themoviedb.org/3/movie/popular?api_key=989a8027930013244e3c2af17088dcac&language=en-US&page=1`}
                />
              )}
            />
            <Route
              exact
              path="/tvShows"
              render={() => (
                <Home
                  api_key={api_key}
                  requests={tvrequests}
                  slideShowUrl={`https://api.themoviedb.org/3/tv/popular?api_key=989a8027930013244e3c2af17088dcac&language=en-US&page=1`}
                />
              )}
            />
            <Route
              exact
              path="/content"
              render={() => <AllContent API_KEY={api_key} />}
            />
            <Route
              exact
              path="/movie"
              render={() => <Movie api_key={api_key} />}
            />
            <Route exact path="/tv" render={() => <TV api_key={api_key} />} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home/index";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllContent from "./components/AllContent";

function App() {
  const key = "989a8027930013244e3c2af17088dcac";
  return (
    <Router>
      <div className="App">
        <Header />
        {/* <div className="gap"></div> */}
        <br />
        <br />
        <br />
        <br />
        <br />
        <div>
          <Switch>
            <Route exact path="/" render={() => <Home key={key} />} />
            <Route
              path="/content"
              render={() => <AllContent API_KEY={key} />}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

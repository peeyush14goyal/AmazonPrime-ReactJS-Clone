import React from "react";
import "./App.css";
import Header from "./components/Header";
import MediaScreen from "./components/MediaScreen";
import requests from "./requests";

function App() {
  const key = "89a8027930013244e3c2af17088dcac";
  return (
    <div className="App">
      <Header />
      {/* <div className="gap"></div> */}
      <br />
      <br />
      <br />
      <br />
      <br />
      <MediaScreen
        heading={requests.getDiscoverMovies.title}
        fetchURL={requests.getDiscoverMovies.url}
        API_KEY={key}
      />
      <MediaScreen
        heading={requests.getComedyMovies.title}
        fetchURL={requests.getComedyMovies.url}
        API_KEY={key}
      />
      <MediaScreen
        heading={requests.getPopularRegionMovies.title}
        fetchURL={requests.getPopularRegionMovies.url}
        API_KEY={key}
      />
      <MediaScreen
        heading={requests.getShortMovies.title}
        fetchURL={requests.getShortMovies.url}
        API_KEY={key}
      />
      <MediaScreen
        heading={requests.getWillSmithMovies.title}
        fetchURL={requests.getWillSmithMovies.url}
        API_KEY={key}
      />
      <MediaScreen
        heading={requests.getAdventureMovies.title}
        fetchURL={requests.getAdventureMovies.url}
        API_KEY={key}
      />
    </div>
  );
}

export default App;

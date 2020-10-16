import React from "react";
import "./App.css";
import Header from "./components/Header";
import MediaScreen from "./components/MediaScreen";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="gap"></div>
      <MediaScreen
        heading="Discover Movies"
        fetchURL="/discover/movie?api_key=989a8027930013244e3c2af17088dcac"
        API_KEY="989a8027930013244e3c2af17088dcac"
      />
      <MediaScreen
        heading="Discover Movies"
        fetchURL="/discover/movie?api_key=989a8027930013244e3c2af17088dcac"
        API_KEY="989a8027930013244e3c2af17088dcac"
      />
      <MediaScreen
        heading="Discover Movies"
        fetchURL="/discover/movie?api_key=989a8027930013244e3c2af17088dcac"
        API_KEY="989a8027930013244e3c2af17088dcac"
      />
      <MediaScreen
        heading="Discover Movies"
        fetchURL="/discover/movie?api_key=989a8027930013244e3c2af17088dcac"
        API_KEY="989a8027930013244e3c2af17088dcac"
      />
    </div>
  );
}

export default App;

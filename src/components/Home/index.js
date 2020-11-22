import React from "react";
import MediaScreen from "../MediaScreen";
import requests from "../../requests";
import Slideshow from "../Slideshow";

const Home = ({ api_key }) => {
  return (
    <div>
      <Slideshow
        fetch_url={"https://api.themoviedb.org/3/trending/all/day"}
        api_key={api_key}
      />
      <MediaScreen
        heading={requests.getDiscoverMovies.title}
        fetchURL={requests.getDiscoverMovies.url}
        API_KEY={api_key}
        moveCount={1}
      />
      <MediaScreen
        heading={requests.getComedyMovies.title}
        fetchURL={requests.getComedyMovies.url}
        API_KEY={api_key}
        genre={35}
        moveCount={2}
      />
      <MediaScreen
        heading={requests.getPopularRegionMovies.title}
        fetchURL={requests.getPopularRegionMovies.url}
        API_KEY={api_key}
        moveCount={3}
      />
      <MediaScreen
        heading={requests.getShortMovies.title}
        fetchURL={requests.getShortMovies.url}
        API_KEY={api_key}
        moveCount={4}
      />
      <MediaScreen
        heading={requests.getWillSmithMovies.title}
        fetchURL={requests.getWillSmithMovies.url}
        API_KEY={api_key}
        moveCount={5}
      />
      <MediaScreen
        heading={requests.getAdventureMovies.title}
        fetchURL={requests.getAdventureMovies.url}
        API_KEY={api_key}
        genre={12}
        moveCount={6}
      />
    </div>
  );
};
export default Home;

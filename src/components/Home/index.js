import React from "react";
import MediaScreen from "../MediaScreen";
import requests from "../../requests";

const Home = ({ key }) => {
  return (
    <div>
      <MediaScreen
        heading={requests.getDiscoverMovies.title}
        fetchURL={requests.getDiscoverMovies.url}
        API_KEY={key}
      />
      <MediaScreen
        heading={requests.getComedyMovies.title}
        fetchURL={requests.getComedyMovies.url}
        API_KEY={key}
        genre={35}
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
        genre={12}
      />
    </div>
  );
};
export default Home;

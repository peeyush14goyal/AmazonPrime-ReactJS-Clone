import React from "react";
import MediaScreen from "../MediaScreen";
import Slideshow from "../Slideshow";

const Home = ({ api_key, requests, slideShowUrl }) => {
  console.log("Requests are ", requests);
  return (
    <div>
      <Slideshow fetch_url={slideShowUrl} api_key={api_key} />
      <br />
      <br />
      <br />
      {requests.map((mediaShow) => {
        return (
          <MediaScreen
            key={mediaShow.title}
            heading={mediaShow.title}
            fetchURL={mediaShow.url}
            API_KEY={api_key}
            moveCount={requests.indexOf(mediaShow) + 1}
            media_type={mediaShow.media}
          />
        );
      })}
    </div>
  );
};
export default Home;

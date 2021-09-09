import React from "react";
import MediaScreen from "../MediaScreen";
import Slideshow from "../Slideshow";
import "./styles.scss";

const Home = ({ api_key, requests, slideShowUrl }) => {
  return (
    <div>
      <div className="slideshowDiv">
        <Slideshow fetch_url={slideShowUrl} api_key={api_key} />
      </div>
      <div className="contentDiv">
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
    </div>
  );
};
export default Home;

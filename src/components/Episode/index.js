import React from "react";
import "./styles.scss";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";

const Episode = ({ index, episode }) => {
  const base_img_url = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="EpisodeDiv">
      <div>
        <img
          src={`${base_img_url}${episode.still_path}`}
          alt={episode.name}
          className="episodeImg"
        />
      </div>
      <div className="paddingInfoDiv">
        <div className="episodeTitle">
          <div>
            <PlayCircleFilledWhiteIcon
              fontSize="large"
              color="primary"
              className="playButtonEpisode"
            />
          </div>
          <div className="episodeTitleText">
            {index}. {episode.name}
          </div>
        </div>
        <br />
        <div>{episode.air_date}</div>
        <br />
        <div>{episode.overview}</div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Episode;

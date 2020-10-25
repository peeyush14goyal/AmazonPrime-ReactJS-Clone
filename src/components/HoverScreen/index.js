import React, { useState, useEffect } from "react";
import "./styles.scss";
import PlayCircleFilledWhiteOutlinedIcon from "@material-ui/icons/PlayCircleFilledWhiteOutlined";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import axios from "../../axios";

const HoverScreen = ({ item, api_key }) => {
  let hours = 0,
    minutes = 0;
  const [media, setMedia] = useState({});

  console.log(api_key);
  useEffect(() => {
    async function getData() {
      const response = await axios.get(`/movie/${item.id}?api_key=${api_key}`);
      setMedia(response.data);
      return response;
    }
    getData();
  }, [item, api_key]);

  console.log(media);

  const base_url = "https://image.tmdb.org/t/p/original/";
  if (media.runtime && media.runtime > 0) {
    hours = Math.floor(media.runtime / 60);
    minutes = media.runtime % 60;
  }
  return (
    <div className="hoverScreen">
      <img
        src={`${base_url}${item.backdrop_path}`}
        alt={item.name}
        className="mediaHoverImg"
      />
      <div className="hoverData">
        <div className="hoverHeading">
          <div className="playDiv">
            <div className="playIcon">
              <PlayCircleFilledWhiteOutlinedIcon
                className="playButton"
                fontSize="medium"
              />
            </div>
            <div className="playtext">Play</div>
          </div>
          <div>
            <AddOutlinedIcon className="addIcon" fontSize="medium" />
          </div>
        </div>
        <div className="title">{item.title}</div>
        <div className="overview">
          {item.overview.length > 90
            ? item.overview.substr(0, 89) + "..."
            : item.overview}
        </div>
        <div className="footerScreen">
          <div className="runTime">
            {hours > 0 ? `${hours}h ` : ""}
            {minutes > 0 ? `${minutes}min` : ""}
          </div>
          <div className="releaseYear">{item.release_date.substr(0, 4)}</div>
          <div>
            <ChatBubbleIcon className="messageIcon" />
          </div>
          <div className="rated">{item.adult ? "18+" : "ALL"}</div>
        </div>
      </div>
    </div>
  );
};

export default HoverScreen;

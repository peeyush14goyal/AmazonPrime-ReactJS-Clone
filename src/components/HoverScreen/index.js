import React, { useState, useEffect } from "react";
import "./styles.scss";
import PlayCircleFilledWhiteOutlinedIcon from "@material-ui/icons/PlayCircleFilledWhiteOutlined";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import axios from "../../axios";
import { Link } from "react-router-dom";

const HoverScreen = ({ item, api_key, media_type }) => {
  let hours = 0,
    minutes = 0;
  const [media, setMedia] = useState({});

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        `/${media_type}/${item.id}?api_key=${api_key}`
      );
      setMedia(response.data);
      return response;
    }
    getData();
  }, [item, api_key, media_type]);

  const base_url = "https://image.tmdb.org/t/p/original/";
  if (media.runtime && media.runtime > 0) {
    hours = Math.floor(media.runtime / 60);
    minutes = media.runtime % 60;
  }
  return (
    <div className="hoverScreen">
      <Link
        to={`/${media_type}?id=${item.id}`}
        style={{ textDecoration: "none", color: "white" }}
      >
        <img
          src={`${base_url}${item.backdrop_path}`}
          alt={item.name}
          className="mediaHoverImg"
        />
        <div className="hoverData">
          <div className="hoverHeading">
            <div className="playDiv">
              <div className="playIcon">
                <PlayCircleFilledWhiteOutlinedIcon className="playButton" />
              </div>
              <div className="playtext">Play</div>
            </div>
            <div>
              <AddOutlinedIcon className="addIcon" />
            </div>
          </div>
          <div className="title">
            {item.title ? item.title : item.original_name}
          </div>
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
            <div className="releaseYear">
              {item.release_date ? item.release_date.substr(0, 4) : ""}
            </div>
            <div>
              <ChatBubbleIcon className="messageIcon" />
            </div>
            <div className="rated">{item.adult ? "18+" : "ALL"}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HoverScreen;

import React, { useState, useEffect } from "react";
import "./styles.scss";
import axios from "../../axios";
import HoverScreen from "../HoverScreen";

const Screen = ({ item, api_key }) => {
  const [media, setMedia] = useState({});
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function getData() {
      const response = await axios.get(`/movie/${item.id}?api_key=${api_key}`);
      setMedia(response.data);
      return response;
    }
    getData();
  }, [item, api_key]);

  console.log(media);

  return (
    <div className="mediaDiv" key={item.id}>
      <img
        src={`${base_url}${item.backdrop_path}`}
        alt={item.name}
        className="mediaImg"
      />
      <div className="hoverScreenDisplay">
        <HoverScreen media={media} item={item} />
      </div>
    </div>
  );
};

export default Screen;

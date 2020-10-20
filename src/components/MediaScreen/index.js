import React, { useState, useEffect } from "react";
import "./styles.scss";
import axios from "../../axios";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import HoverScreen from "../HoverScreen";

const MediaScreen = ({ heading, fetchURL, API_KEY }) => {
  const [data, setData] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(fetchURL);
      setData(response.data.results);
      return response;
    }
    fetchData();
  }, [fetchURL]);

  return (
    <div className="mediaScreen">
      <div className="headingBanner">{heading}</div>
      <div className="leftIconDiv">
        <ChevronLeftIcon className="leftIcon" fontSize="large" />
      </div>
      <div className="banner">
        {data.map((item) => {
          return (
            <div>
              <div className="mediaDiv" key={item.id}>
                <img
                  src={`${base_url}${item.backdrop_path}`}
                  alt={item.name}
                  className="mediaImg"
                />
                <div className="displayhoverScreen">
                  <HoverScreen item={item} api_key={API_KEY} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="rightIconDiv">
        <ChevronRightIcon className="rightIcon" fontSize="large" />
      </div>
    </div>
  );
};

export default MediaScreen;

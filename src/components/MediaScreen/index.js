import React, { useState, useEffect } from "react";
import "./styles.scss";
import axios from "../../axios";
import Screen from "../Screen";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

const MediaScreen = ({ heading, fetchURL, API_KEY }) => {
  const [data, setData] = useState([]);

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
          return <Screen item={item} api_key={API_KEY} />;
        })}
      </div>
      <div className="rightIconDiv">
        <ChevronRightIcon className="rightIcon" fontSize="large" />
      </div>
    </div>
  );
};

export default MediaScreen;

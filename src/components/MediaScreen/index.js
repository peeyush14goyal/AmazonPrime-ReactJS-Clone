import React, { useState, useEffect } from "react";
import "./styles.scss";
import axios from "../../axios";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import HoverScreen from "../HoverScreen";
import { Link } from "react-router-dom";

const MediaScreen = ({ heading, fetchURL, API_KEY, genre = -1, moveCount }) => {
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

  const scrollToLeft = () => {
    document.getElementById("bannerDiv" + moveCount.toString()).scrollBy({
      left: -800,
    });
  };
  const scrollToRight = () => {
    document.getElementById("bannerDiv" + moveCount.toString()).scrollBy({
      left: 800,
    });
  };

  const shuffleData = (arr) => {
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  };
  if (data.length > 0) {
    shuffleData(data);
  }
  return (
    <div className="mediaScreen">
      <div className="headingBanner">
        <div>{heading}</div>
        {genre > 0 ? (
          <Link to={`/content?genre=${genre}&title=${heading}`}>
            <div className="moreButton">see more</div>
          </Link>
        ) : (
          <div></div>
        )}
      </div>

      <div className="leftIconDiv" onClick={scrollToLeft}>
        <ChevronLeftIcon className="leftIcon" fontSize="large" />
      </div>
      <div className="banner" id={"bannerDiv" + moveCount.toString()}>
        &nbsp;
        {data.map((item) => {
          return (
            <div key={item.id}>
              <div className="mediaDiv">
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
      <div className="rightIconDiv" onClick={scrollToRight}>
        <ChevronRightIcon className="rightIcon" fontSize="large" />
      </div>
    </div>
  );
};

export default MediaScreen;

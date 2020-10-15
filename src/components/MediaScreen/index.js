import React, { useState, useEffect } from "react";
import "./styles.scss";
import axios from "../../axios";
import PlayCircleFilledWhiteOutlinedIcon from "@material-ui/icons/PlayCircleFilledWhiteOutlined";
import AddOutlinedIcon from "@material-ui/icons/AddOutlined";

const MediaScreen = ({ heading, fetchURL, API_KEY }) => {
  const [data, setData] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";
  let time;

  async function getMovieRuntime(movie_id) {
    const response = await axios.get(`/movie/${movie_id}?api_key=${API_KEY}`);
    //console.log(response.data);
    return response;
  }

  const getRunTime = (movie_id) => {
    getMovieRuntime(movie_id).then((response) => {
      //console.log(response.data.runtime);
      time = response.data.runtime;
      console.log(time);
      return time;
    });
  };

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
      <div className="banner">
        {data.map((item) => {
          const runTime = getRunTime(item.id);
          return (
            <div className="mediaDiv" key={item.id}>
              <img
                src={`${base_url}${item.backdrop_path}`}
                alt={item.name}
                className="mediaImg"
              />
              <div className="hoverData">
                <div className="hoverHeading">
                  <div className="playDiv">
                    <div className="playIcon">
                      <PlayCircleFilledWhiteOutlinedIcon
                        className="playButton"
                        fontSize="large"
                      />
                    </div>
                    <div className="playtext">Play</div>
                  </div>
                  <div>
                    <AddOutlinedIcon className="addIcon" fontSize="large" />
                  </div>
                </div>
                <br />
                <div className="title">{item.title}</div>
                <div className="overview">
                  {item.overview.length > 90
                    ? item.overview.substr(0, 89) + "..."
                    : item.overview}
                </div>
                <div>
                  <div>{runTime}</div>
                  <div className="releaseYear">
                    {item.release_date.substr(0, 4)}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MediaScreen;

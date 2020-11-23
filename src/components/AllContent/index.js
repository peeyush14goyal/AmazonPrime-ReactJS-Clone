import React, { useState, useEffect } from "react";
import "./styles.scss";
import axiosR from "../../axios";
import axios from "axios";

const AllContent = ({ API_KEY }) => {
  const urlParams = new URLSearchParams(window.location.search);
  const genre_id = urlParams.get("genre");
  const heading = urlParams.get("title");

  const [allcontent, setContent] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const request1 = axiosR.get(
      `/discover/movie/?api_key=${API_KEY}&with_genres=${genre_id}`
    );
    const request2 = axiosR.get(
      `/discover/movie/?api_key=${API_KEY}&with_genres=${genre_id}&page=2`
    );
    const request3 = axiosR.get(
      `/discover/movie/?api_key=${API_KEY}&with_genres=${genre_id}&page=3`
    );
    const request4 = axiosR.get(
      `/discover/movie/?api_key=${API_KEY}&with_genres=${genre_id}&page=4`
    );
    async function getData() {
      axios.all([request1, request2, request3, request4]).then(
        axios.spread((...responses) => {
          const response1 = responses[0].data.results;
          const response2 = responses[1].data.results;
          const response3 = responses[2].data.results;

          setContent(response1.concat(response2, response3));
        })
      );
    }
    getData();
  }, [genre_id, API_KEY]);

  console.log(allcontent);
  return (
    <div>
      <br />
      <div className="contentTitle">{heading}</div>
      <br />
      <div className="contentGridDisplay">
        {allcontent.map((item) => {
          return (
            <div>
              <img
                src={`${base_url}${item.backdrop_path}`}
                alt={item.name}
                className="gridImg"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllContent;

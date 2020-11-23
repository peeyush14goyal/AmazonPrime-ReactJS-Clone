import React, { useState, useEffect } from "react";
import axios from "../../axios";
import "./styles.scss";

const Slideshow = ({ fetch_url, api_key }) => {
  const [sshow, setSshow] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";
  var startSS = 0;
  var temp_int;
  const automaticSlideshow = () => {
    const x = document.getElementsByClassName("ssDiv");

    var i;
    if (x.length === 0) {
      clearInterval(temp_int);
    }
    for (i = 0; i < sshow.length && x.length > 0; i++) {
      if (i === startSS) {
        x[i].style.display = "block";
        x[i].style.width = "100%";
      } else {
        x[i].style.display = "none";
        x[i].style.width = "0%";
      }
    }
    startSS++;
    if (sshow.length > 0 && startSS === sshow.length) {
      startSS = 0;
    }
  };

  temp_int = setInterval(automaticSlideshow, 5000);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(fetch_url + `?api_key=${api_key}`);

      setSshow(response.data.results);
      return response;
    }
    fetchData();
  }, [fetch_url, api_key]);

  console.log(sshow);

  return (
    <div>
      {sshow.map((item) => {
        return (
          <div key={item.id} className="ssDiv">
            <div>
              <img
                src={`${base_url}${item.backdrop_path}`}
                alt={item.name}
                className="slideshowImg"
              />

              <div className="SSdescription">
                <div className="ssTitle">
                  {item.original_title
                    ? item.original_title
                    : item.original_name}
                </div>
                <div className="ssOverview">{item.overview}</div>
                {/* <div className="ssVote">
                  Media Type:{" "}
                  {item.media_type === "tv"
                    ? item.media_type.toUpperCase()
                    : item.media_type.charAt(0).toUpperCase() +
                      item.media_type.slice(1)}
                </div> */}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Slideshow;

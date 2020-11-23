import React, { useState, useEffect } from "react";
import "./styles.scss";
import axios from "../../axios";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import ChangeHistoryIcon from "@material-ui/icons/ChangeHistory";
import GetAppIcon from "@material-ui/icons/GetApp";
import Button from "@material-ui/core/Button";

const Movie = ({ api_key }) => {
  const [credits, setCredits] = useState();
  const [movieDetails, setDetails] = useState();
  const base_url = "https://api.themoviedb.org/3/movie/";
  let detailsLoaded = false;
  let creditsLoaded = false;
  let hours, minutes;
  let director;

  const urlParams = new URLSearchParams(window.location.search);
  const movie_id = urlParams.get("id");
  console.log("Inside Movie");

  const image_base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchDetails() {
      const response = await axios.get(
        `${base_url}${movie_id}?api_key=${api_key}`
      );
      console.log("Movie details are", response.data);
      setDetails(response.data);
      return response;
    }
    async function fetchCredits() {
      const response = await axios.get(
        `${base_url}${movie_id}/credits?api_key=${api_key}`
      );
      console.log("Credits are ", response.data);
      setCredits(response.data);
    }
    fetchCredits();
    fetchDetails();
  }, [base_url, movie_id, api_key]);

  if (movieDetails) {
    detailsLoaded = true;
  }
  if (credits) {
    creditsLoaded = true;
    credits.crew.map((person) => {
      if (person.known_for_department === "Directing") {
        director = person.name;
      }
      return person.name;
    });
  }

  if (detailsLoaded && movieDetails.runtime && movieDetails.runtime > 0) {
    hours = Math.floor(movieDetails.runtime / 60);
    minutes = movieDetails.runtime % 60;
  }

  return (
    <div>
      {detailsLoaded ? (
        <div>
          <div className="movieInfo">
            <div className="title2">{movieDetails.title}</div>
            <div className="overview2">
              {/* {movieDetails.overview.length > 90
                ? movieDetails.overview.substr(0, 89) + "..."
                : movieDetails.overview} */}
              {movieDetails.overview}
            </div>
            <div className="footerScreen2">
              <div className="rating2">IMDb {movieDetails.vote_average}</div>
              <div className="runTime2">
                {hours > 0 ? `${hours}h ` : ""}
                {minutes > 0 ? `${minutes}min` : ""}
              </div>
              <div className="releaseYear2">
                {movieDetails.release_date.substr(0, 4)}
              </div>

              <div className="rated2">{movieDetails.adult ? "18+" : "ALL"}</div>
              <div>
                <ChatBubbleIcon className="messageIcon2" fontSize="large" />
              </div>
              <div className="buttonGroup">
                <div>
                  <Button
                    color="primary"
                    className="playmovieButton"
                    startIcon={
                      <PlayCircleFilledWhiteIcon
                        fontSize="large"
                        color="primary"
                        className="moviePlayIcon"
                      />
                    }
                  >
                    <text className="moviePlayText">Play</text>
                  </Button>
                </div>
                <div>
                  <Button
                    variant="contained"
                    className="movieButton"
                    startIcon={<ChangeHistoryIcon className="trailerIcon" />}
                  >
                    Watch Trailer
                  </Button>
                </div>
                <div>
                  <Button
                    variant="contained"
                    color="default"
                    className="movieButton"
                  >
                    Add to Watchlist
                  </Button>
                </div>
                <div>
                  <Button
                    variant="contained"
                    color="default"
                    className="movieButton"
                    startIcon={<GetAppIcon />}
                  >
                    Download
                  </Button>
                </div>
              </div>
              {creditsLoaded ? (
                <div className="people">
                  <div className="peopleHeading">Director</div>
                  <div className="peopleVal">{director}</div>
                  <div className="peopleHeading">Starring</div>
                  <div className="peopleVal">
                    {credits.cast.map((person) => {
                      let str = `${person.name}, `;
                      return str;
                    })}
                  </div>
                  <div className="peopleHeading">Genres</div>
                  <div className="peopleVal">
                    {movieDetails.genres.map((genre) => {
                      let str = `${genre.name}, `;
                      return str;
                    })}
                  </div>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
          <div className="imageDiv">
            <img
              className="movie_image"
              src={`${image_base_url}${movieDetails.backdrop_path}`}
              alt={movieDetails.id}
            />
          </div>
          <div className="divImage1"></div>
          <div className="divImage2"></div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
export default Movie;

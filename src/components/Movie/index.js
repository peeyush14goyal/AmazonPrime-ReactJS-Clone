import React, { useState, useEffect } from "react";
import "./styles.scss";
import axios from "../../axios";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import PlayCircleFilledWhiteIcon from "@material-ui/icons/PlayCircleFilledWhite";
import ChangeHistoryIcon from "@material-ui/icons/ChangeHistory";
import GetAppIcon from "@material-ui/icons/GetApp";
import Button from "@material-ui/core/Button";
import MediaScreen from "../MediaScreen";

const Movie = ({ api_key }) => {
  const [credits, setCredits] = useState();
  const [movieDetails, setDetails] = useState();
  const [videoId, setVideoId] = useState();
  const [detailShow, setShow] = useState(1);
  const base_url = "https://api.themoviedb.org/3/movie/";
  let detailsLoaded = false;
  let creditsLoaded = false;
  let hours, minutes;
  let director = [];
  let crew = [];
  let writing = [];
  let production = [];

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
        director.push(person.name);
      } else if (person.known_for_department === "Production") {
        production.push(person.name);
      } else if (person.known_for_department === "Writing") {
        writing.push(person.name);
      } else if (person.known_for_department === "Crew") {
        crew.push(person.name);
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
            <div className="moviefooterScreen">
              <div className="movierating">
                IMDb {movieDetails.vote_average}
              </div>
              <div className="movierunTime">
                {hours > 0 ? `${hours}h ` : ""}
                {minutes > 0 ? `${minutes}min` : ""}
              </div>
              <div className="moviereleaseYear">
                {movieDetails.release_date.substr(0, 4)}
              </div>

              <div className="movierated">
                {movieDetails.adult ? "18+" : "ALL"}
              </div>
              <div>
                <ChatBubbleIcon className="moviemessageIcon" fontSize="large" />
              </div>
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
                    let str = "";
                    if (credits.cast.indexOf(person) < 11) {
                      str = `${person.name}, `;
                    }
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

      <div className="relatedMovies">
        <div>
          <div className="tabHeading">
            <div
              onClick={() => {
                setShow(1);
              }}
              className={detailShow === 1 ? "activeRelated" : ""}
            >
              Related
            </div>
            <div
              onClick={() => {
                setShow(0);
              }}
              className={detailShow === 0 ? "activeDetails" : ""}
            >
              Details
            </div>
          </div>
          {detailsLoaded && detailShow === 1 ? (
            <MediaScreen
              heading="Customers also watched"
              moveCount="movie10"
              API_KEY={api_key}
              fetchURL={`https://api.themoviedb.org/3/movie/${movieDetails.id}/similar?api_key=${api_key}&language=en-US&page=1`}
            />
          ) : (
            <div className="detailsCrew">
              <div className="people">
                {production.length > 0 ? (
                  <div className="peopleHeading">Production</div>
                ) : (
                  <div></div>
                )}
                {production.length > 0 ? (
                  <div className="peopleVal">
                    {production.map((person) => {
                      let str = `${person}, `;
                      return str;
                    })}
                  </div>
                ) : (
                  <div></div>
                )}
                {writing.length > 0 ? (
                  <div className="peopleHeading">Writing</div>
                ) : (
                  <div></div>
                )}
                {writing.length > 0 ? (
                  <div className="peopleVal">
                    {writing.map((person) => {
                      let str = `${person}, `;
                      return str;
                    })}
                  </div>
                ) : (
                  <div></div>
                )}
                {crew.length > 0 ? (
                  <div className="peopleHeading">Crew</div>
                ) : (
                  <div></div>
                )}
                {crew.length > 0 ? (
                  <div className="peopleVal">
                    {crew.map((person) => {
                      let str = `${person}, `;
                      return str;
                    })}
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          )}
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};
export default Movie;

import { useState, useEffect } from "react";

import instance from "../../utilis/axios";

import requests from "../../utilis/requests";
import "./Banner.css"

const Banner = () => {

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await instance.get(requests.fetchNetflixOriginals);
        if (request.data && request.data.results) {
          setMovie(
            request.data.results[
              Math.floor(Math.random() * request.data.results.length)
            ]
          );
        }
      } catch (error) {
        console.error("Error fetching Netflix Originals:", error);
      }
    }
    fetchData();
  }, []);
function truncate(str, n) {
 
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}
  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",

        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="">
          <button className="banner-buttons play">Play</button>
          <button className="banner-buttons">My List</button>
        </div>
      </div>
      <h1 className="banner-description">{truncate(movie?.overview, 150)}</h1>
      <div className="banner-fadeButton"></div>
    </div>
  );
};

export default Banner;


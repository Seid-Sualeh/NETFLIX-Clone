// import './Row.css'
// import { useEffect, useState } from 'react'
// import instance from '../../../utilis/axios'
// import movieTrailer from 'movie-trailer'
// import YouTube from 'react-youtube'

// const Row = ({ title, fetchUrl, isLargeRow }) => {
//    const [movies, setMovies] = useState([]);
//     const [trailerUrl, settrailerUrl] = useState("");
//     const baseUrl = "https://image.tmdb.org/t/p/orginal";
//     useEffect(() => {
//         (async () => {
//             try {
//                 console.log(fetchUrl);
//                 const request = await instance.get(fetchUrl)
//                 console.log(request);
//                 setMovies(request.data.results);
//             } catch (error) {
//                 console.log("error", error);
//             }
//         })();
//     },[fetchUrl])

// const handelclick = (movies) => {
//     if (trailerUrl) {
//         settrailerUrl("")
//     } else {
//         moviesTrailer(movies?.title || movies?.name || movies?.orginal_name)
//             .then((url) => {
//                 console.log(url);
//                 const urlParams = new URLSearchParams(new URL(url).search)
//                 console.log(urlParams);
//                 console.log(urlParams.get("v"));
//                 settrailerUrl(urlParams.get("v"));
//         })
//     }
// }

// const opts = {
//     height: '390',
//     width: "100%",
//     playerVars: {
//         autoplay:1,
//     }
// }


//   return (
//       <div className='row'>
          
//           <h1>{title}</h1>
//           <div className='row_posters'>
//               {movies?.map((movie, index) => {
//                   <img onClick={() => handelclick(movie)
                      
//                   } key={index} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`alt={movie.name} className=`{row_poster ${isLargeRow && "row_posterLarge"}`
//               }/>
//               })}
//           </div>
//           <div style={{padding:"40px"}}>
//               {trailerUrl&&<YouTube videoId={trailerUrl} opts={opts}/>}
//           </div>
          
//     </div>
//   )

// }
// export default Row



import "./Row.css";
import { useEffect, useState } from "react";
import instance from "../../../utilis/axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState(""); // Corrected variable name for clarity
  const baseUrl = "https://image.tmdb.org/t/p/original"; // Corrected "orginal" to "original"

  useEffect(() => {
    (async () => {
      try {
        const request = await instance.get(fetchUrl);
        setMovies(request.data.results);
      } catch (error) {
        console.log("error", error);
      }
    })();
  }, [fetchUrl]);

  const handleClick = (movie) => {
    // Corrected function name for consistency
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error)); // Added a catch block for error handling
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {movies?.map(
          (
            movie,
            index // Corrected syntax: `return` statement or implicit return with `()`
          ) => (
            <img
              key={movie.id || index} // Use `movie.id` for a more stable key, fallback to `index`
              onClick={() => handleClick(movie)}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`} // Corrected backticks and class name
              src={`${baseUrl}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`} // Corrected variable name and `alt` prop
              alt={movie.name || movie.title}
            />
          )
        )}
      </div>
      <div style={{ padding: "40px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
};

export default Row;
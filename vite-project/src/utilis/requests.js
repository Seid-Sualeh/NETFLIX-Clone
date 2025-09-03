const apiKey = process.env.REACT_APP_apiKey;

const requests = {
  fetchTrending: `/trending/all/week?apiKey=${apiKey}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?apiKey=${apiKey}&with_network=213`,
    fetchTopRated: `/discover/movie?apiKey=${apiKey}&with_genres=28`,
  fetchActionMovies:`/discover/movie?api_key=${apiKey}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?apiKey=${apiKey}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?apiKey=${apiKey}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?apiKey=${apiKey}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?apiKey=${apiKey}&with_genres=99`,
  fetchTvShows: `/discover/tv?apiKey=${apiKey}&with_genres=10770


    `,
};
export default requests;

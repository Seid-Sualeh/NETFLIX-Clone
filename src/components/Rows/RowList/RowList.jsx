import React from 'react'
import Row from '../Row/Row'
import requests from '../../../utilis/requests'

const RowList = () => {
  return (
    <>
      <Row
        title="NETFLIX ORGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Trading Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title=" Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title=" Tv Shows" fetchUrl={requests.fetchTvShows} />
    </>
  );
}

export default RowList
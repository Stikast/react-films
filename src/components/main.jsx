import { useState } from 'react';
import { Movies } from './movies';
import { Preloader } from './preloader';
import { Search } from './search';

const API_KEY = import.meta.env.VITE_API_KEY;

function Main() {
  const [isStartPage, setIsStartPage] = useState(true);
  const [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);

  async function searchMovies(str, type = 'all') {
    setLoading(true);
    try {
      if (type === 'all') {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}`
        );
        const json = await response.json();
        setIsStartPage(false);
        setMovies(json.Search);
        setTotalResults(json.totalResults);
        setLoading(false);
      } else {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}&type=${type}`
        );
        const json = await response.json();
        setIsStartPage(false);
        setMovies(json.Search);
        setTotalResults(json.totalResults);
        setLoading(false);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  }

  return (
    <main className="container content">
      <Search searchMovies={searchMovies} />
      {isStartPage ? (
        <>
          <p className="start-page-title">Movie search service</p>
          <p className="start-page-title">
            Enter the name of the movie or TV series
          </p>
        </>
      ) : loading ? (
        <Preloader />
      ) : (
        <Movies movies={movies} totalResults={totalResults} />
      )}
    </main>
  );
}

export { Main };

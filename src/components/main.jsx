import { useEffect, useState } from 'react';
import { Movies } from './movies';
import { Preloader } from './preloader';
import { Search } from './search';

const API_KEY = import.meta.env.VITE_API_KEY;

/* eslint-disable react/prop-types */
function Main() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${API_KEY}&s=Cars`
        );
        const json = await response.json();
        setMovies(json.Search);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  async function searchMovies(str, type = 'all') {
    setLoading(true);
    try {
      if (type === 'all') {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=102fd161&s=${str}`
        );
        const json = await response.json();
        setMovies(json.Search);
        setLoading(false);
      } else {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=102fd161&s=${str}&type=${type}`
        );
        const json = await response.json();
        setMovies(json.Search);
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
      {loading ? <Preloader /> : <Movies movies={movies} />}
    </main>
  );
}

export { Main };

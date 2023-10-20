/* eslint-disable react/prop-types */
import { Movie } from './movie';

function Movies({ movies = [], totalResults = 0 }) {
  const moviesList = movies.map((movie) => (
    <Movie key={movie.imdbID} {...movie} />
  ));

  return (
    <>
      <div className="movies">
        {movies.length ? moviesList : <h1>Nothing found</h1>}
      </div>
      <p>Found {totalResults}</p>
    </>
  );
}

export { Movies };

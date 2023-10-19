/* eslint-disable react/prop-types */
import { Movie } from './movie';

function Movies({ movies = [] }) {
  const moviesList = movies.map((movie) => (
    <Movie key={movie.imdbID} {...movie} />
  ));

  return (
    <div className="movies">
      {movies.length ? moviesList : <h2>Nothing found</h2>}
    </div>
  );
}

export { Movies };

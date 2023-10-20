import { Movie } from './movie';
import PropTypes from 'prop-types';

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

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
  totalResults: PropTypes.number.isRequired,
};

export { Movies };

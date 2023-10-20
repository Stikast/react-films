import PropTypes from 'prop-types';

function Movie({
  Title: title,
  Year: year,
  Poster: img,
  Type: info,
  imdbID: id,
}) {
  return (
    <div id={id} className="card movie">
      <div className="card-image">
        {img === 'N/A' ? (
          <img src={`https://placehold.jp/300x450.png?text=${title}`} />
        ) : (
          <img className="movie-img" src={img} />
        )}
      </div>
      <div className="card-content">
        <span className="card-title">{title}</span>
        <span className="right">{info}</span>
        <p>{year}</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  Title: PropTypes.string.isRequired,
  Year: PropTypes.string.isRequired,
  Poster: PropTypes.string.isRequired,
  Type: PropTypes.string.isRequired,
  imdbID: PropTypes.string.isRequired,
};

export { Movie };

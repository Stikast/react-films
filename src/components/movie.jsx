/* eslint-disable react/prop-types */
function Movie(props) {
  const {
    Title: title,
    Year: year,
    Poster: img,
    Type: info,
    imbdID: id,
  } = props;

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

export { Movie };

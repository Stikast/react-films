import { useState } from 'react';

// eslint-disable-next-line react/prop-types
function Search({ searchMovies }) {
  const [search, setSearch] = useState({
    title: '',
    type: 'all',
  });

  function handleKey(event) {
    if (event.key === 'Enter') {
      searchMovies(search.title, search.type);
    }
  }

  function handleFilter(event) {
    setSearch({
      ...search,
      type: event.target.dataset.type,
    });
    searchMovies(search.title, event.target.dataset.type);
  }
  return (
    <div>
      <div className="input-field search">
        <input
          autoComplete="off"
          placeholder="Search"
          type="search"
          id="email_inline"
          value={search.title}
          onChange={(event) =>
            setSearch({
              ...search,
              title: event.target.value,
            })
          }
          onKeyDown={handleKey}
        />
        <button
          className="btn deep-purple accent-2"
          onClick={() => searchMovies(search.title, search.type)}
        >
          Search
        </button>
      </div>
      <div className="filters">
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="all"
            checked={search.type === 'all'}
            onChange={handleFilter}
          />
          <span>All</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="movie"
            checked={search.type === 'movie'}
            onChange={handleFilter}
          />
          <span>Movies only</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="series"
            checked={search.type === 'series'}
            onChange={handleFilter}
          />
          <span>Series only</span>
        </label>
      </div>
    </div>
  );
}

export { Search };

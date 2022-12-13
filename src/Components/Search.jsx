import React from 'react'
import { useGlobalContext } from '../context'

const Search = () => {
  const { query, setQuery } = useGlobalContext();
  
  return (
    <>
      <section className="search-section">
        <h2>Search Movie</h2>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="text"
              placeholder="Movie name..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </form>
      </section>
    </>
  );
};

export default Search;
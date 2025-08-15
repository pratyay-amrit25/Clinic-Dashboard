import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './Search.css';

const Search = ({ data, onResultClick }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);

    if (newQuery.length > 1) {
      const allData = [...data.patients, ...data.doctors];
      const filteredResults = allData.filter(item =>
        item.name.toLowerCase().includes(newQuery.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  };

  const handleResultClick = (result) => {
    onResultClick(result);
    setQuery('');
    setResults([]);
  };

  return (
    <div className="search-container">
      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search patients or doctors..."
          value={query}
          onChange={handleInputChange}
        />
      </div>
      {results.length > 0 && (
        <ul className="search-results">
          {results.map(result => (
            <li key={result.id} onClick={() => handleResultClick(result)}>
              <span className="result-name">{result.name}</span>
              <span className="result-type">{result.specialty ? 'Doctor' : 'Patient'}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;

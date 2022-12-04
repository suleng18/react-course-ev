import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import lodash from 'lodash';

// https://hn.algolia.com/api/v1/search?query=react
const HackerNews = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState('react');
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const handleFetchData = useRef({});

  handleFetchData.current = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://hn.algolia.com/api/v1/search?query=${query}`);
      setHits(response.data?.hits);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErrorMessage(`The error ${error}`);
    }
  };

  const handleUpdateQuery = lodash.debounce((e) => {
    setQuery(e.target.value);
  }, 400);

  useEffect(() => {
    handleFetchData.current();
  }, [query]);

  return (
    <div className="bg-white mx-auto mt-5 p-5 rounded-lg shadow-md w-2/4">
      <input
        type="text"
        className="border border-gray-200 text-black w-full p-5 mb-5 my-5 rounded-md focus:border-blue-400 transition-all"
        defaultValue={query}
        onChange={handleUpdateQuery}
        placeholder="typing your keyword..."
      />
      {loading && (
        <div className="mx-auto my-10 loading w-8 h-8 rounded-full border-blue-500 border-4 border-r-4 border-r-transparent animate-spin"></div>
      )}
      {!loading && errorMessage && <p className="text-red-400 my-5">{errorMessage}</p>}
      <div className="flex flex-wrap gap-5">
        {!loading &&
          hits.length > 0 &&
          hits.map((item, index) => (
            <h3 className="p-3 bg-gray-100 rounded-md" key={index}>
              {item.title}
            </h3>
          ))}
      </div>
    </div>
  );
};

export default HackerNews;

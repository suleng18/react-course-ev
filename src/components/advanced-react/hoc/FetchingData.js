import React from 'react';
import withError from './withError';
import withLoading from './withLoading';

const FetchingData = ({ data }) => {
  console.log('🚀 ~ data', data);
  return (
    <div>
      {data.map((item, idx) => (
        <div key={idx}>{item.title}</div>
      ))}
    </div>
  );
};

export default withError(
  withLoading(FetchingData, 'https://hn.algolia.com/api/v1/search?query=react'),
);

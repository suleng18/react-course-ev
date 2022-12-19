import React from 'react';
import withLoading from './withLoading';

const FetchingDataOther = ({ data }) => {
  console.log('🚀 ~ data', data);
  return (
    <div>
      {data.map((item) => (
        <div key={item}>{item.title}</div>
      ))}
    </div>
  );
};

export default withLoading(FetchingDataOther, 'https://hn.algolia.com/api/v1/search?query=css');

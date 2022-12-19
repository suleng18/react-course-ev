import React from 'react';
import { useState } from 'react';

const HandleValue = () => {
  return (
    <div className="handle-value">
      <Input>{(value) => <DisplayValue value={value}></DisplayValue>}</Input>
    </div>
  );
};

const Input = (props) => {
  const [value, setValue] = useState('');

  return (
    <>
      <input
        className="border p-3 rounded-md border-gray-500"
        type="text"
        onChange={(e) => setValue(e.target.value)}
      />
      {props.children(value)}
    </>
  );
};

const DisplayValue = ({ value }) => {
  return <span className="text-3xl text-blue-500 font-bold">{value}</span>;
};
export default HandleValue;

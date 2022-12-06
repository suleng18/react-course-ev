import React from 'react';
import { useState } from 'react';

const Form = () => {
  // const [fullname, setFullname] = useState('');
  // const [message, setMessage] = useState('');
  // const [country, setCountry] = useState('');

  // const handleInputChange = (e) => {
  //   setFullname(e.target.value);
  // };

  // const handleTextareaChange = (e) => {
  //   setMessage(e.target.value);
  // };

  // const handleSelectOnChange = (e) => {
  //   setCountry(e.target.value);
  // };

  const [values, setValues] = useState({
    fullname: '',
    email: '',
    hobby: false,
  });

  const handleInputChange = (e) => {
    const type = e.target.type;

    setValues({
      ...values,
      [e.target.name]: type === 'checkbox' ? e.target.checked : e.target.value,
    });

    // if (type === 'checkbox') {
    //   setValues({
    //     ...values,
    //     [e.target.name]: e.target.checked,
    //   });
    // } else {
    //   setValues({
    //     ...values,
    //     [e.target.name]: e.target.value,
    //   });
    // }
  };

  return (
    <div className="p-5">
      <div className="flex gap-x-3">
        <input
          type="text"
          name="fullname"
          onChange={handleInputChange}
          className="w-full max-x-[300px] p-5 border border-gray-200 rounded-lg focus:border-blue-400"
          placeholder="enter your name"
        />
        <input
          type="email"
          name="email"
          onChange={handleInputChange}
          className="w-full max-x-[300px] p-5 border border-gray-200 rounded-lg focus:border-blue-400"
          placeholder="enter your email address"
        />

        <input type="checkbox" name="hobby" onChange={handleInputChange} />
      </div>

      {/* <h3>Message: {message}</h3>
      <textarea
        className="w-full max-x-[300px] p-5 border border-gray-200 rounded-lg focus:border-blue-400"
        placeholder="enter your message"
        name="message"
        onChange={handleTextareaChange}
      ></textarea>

      <h3>Select: {country}</h3>
      <select name="country" onChange={handleSelectOnChange}>
        <option value="vietnam">VietName</option>
        <option value="USA">America</option>
        <option value="Korea">Korea</option>
      </select> */}
    </div>
  );
};

export default Form;

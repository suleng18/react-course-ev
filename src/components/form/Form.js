import React from 'react';
import { useState } from 'react';
import useHandleChange from '../../hooks/useHandleChange';

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

  // const [values, setValues] = useState({
  //   fullname: '',
  //   email: '',
  //   hobby: false,
  // });

  // const handleInputChange = (e) => {
  //   const type = e.target.type;

  //   setValues({
  //     ...values,
  //     [e.target.name]: type === 'checkbox' ? e.target.checked : e.target.value,
  //   });

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
  // };

  const [nameError, setNameError] = useState('');

  const { values, handleChange } = useHandleChange({
    fullname: '',
    email: '',
    hobby: false,
  });

  const handleOnSubmitForm = (e) => {
    e.preventDefault();
    if (values.fullname === '') setNameError('Your fullname is empty');
    else setNameError('');
  };

  return (
    <div className="p-5">
      <form className="flex gap-x-3" onSubmit={handleOnSubmitForm}>
        <div className="flex flex-col gap-y-2 flex-shrink-0">
          <input
            type="text"
            name="fullname"
            onChange={handleChange}
            className="w-full max-x-[300px] p-5 border border-gray-200 rounded-lg focus:border-blue-400"
            placeholder="enter your name"
          />
          {nameError}
        </div>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          className="w-full max-x-[300px] p-5 border border-gray-200 rounded-lg focus:border-blue-400"
          placeholder="enter your email address"
        />
        <button type="submit" className="p-3 rounded-lg text-white bg-blue-500">
          Submit
        </button>
        {/* <input type="checkbox" name="hobby" onChange={handleChange} /> */}
      </form>

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

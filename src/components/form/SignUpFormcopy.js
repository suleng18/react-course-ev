import { useFormik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const SignUpForm1copy = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().max(20, 'Too Long!').required('Required'),
      lastName: Yup.string().max(20, 'Too Long!').required('Required'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log('🚀 ~ formik', formik);

  return (
    <form onSubmit={formik.handleSubmit} className="p-10 w-full max-w-[500px] mx-auto ">
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="firstName">Firstname</label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter your first name"
          className="p-4 border border-blue-500 rounded-md"
          {...formik.getFieldProps('firstName')}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="text-sm text-red-500">{formik.errors.firstName}</div>
        ) : null}
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="lastName">Lastname</label>
        <input
          type="text"
          id="lastName"
          placeholder="Enter your first name"
          className="p-4 border border-blue-500 rounded-md"
          {...formik.getFieldProps('lastName')}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="text-sm text-red-500">{formik.errors.lastName}</div>
        ) : null}
      </div>
      <button type="submit" className="w-full p-4 text-white bg-blue-500 rounded-lg font-semibold">
        Submit
      </button>
    </form>
  );
};

export default SignUpForm1copy;

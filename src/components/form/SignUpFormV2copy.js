import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const SignUpFormV2copy = () => {
  return (
    <Formik
      initialValues={{ firstName: '', lastName: '' }}
      validationSchema={Yup.object({
        firstName: Yup.string().max(20, 'Too Long!').required('Required'),
        lastName: Yup.string().max(20, 'Too Long!').required('Required'),
      })}
      onSubmit={(values) => console.log(values)}
    >
      <Form className="p-10 w-full max-w-[500px] mx-auto ">
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="firstName">Firstname</label>
          <Field
            name="firstName"
            type="text"
            placeholder="Enter your first name"
            className="p-4 border border-blue-500 rounded-md"
          ></Field>
          <div className="text-sm text-red-600">
            <ErrorMessage name="firstName"></ErrorMessage>
          </div>
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="lastName">Lastname</label>
          <Field
            name="lastName"
            type="text"
            placeholder="Enter your last name"
            className="p-4 border border-blue-500 rounded-md"
          ></Field>
          <div className="text-sm text-red-600">
            <ErrorMessage name="lastName"></ErrorMessage>
          </div>
        </div>
        <button
          type="submit"
          className="w-full p-4 text-white bg-blue-500 rounded-lg font-semibold"
        >
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default SignUpFormV2copy;

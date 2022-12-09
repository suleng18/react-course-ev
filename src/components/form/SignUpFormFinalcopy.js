import { Form, Formik, useField } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const SignUpFormFinalcopy = () => {
  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '', intro: '', terms: false }}
      validationSchema={Yup.object({
        firstName: Yup.string().max(20, 'Too Long!').required('Required'),
        lastName: Yup.string().max(20, 'Too Long!').required('Required'),
        email: Yup.string().email().required('Required'),
        job: Yup.string().required('Required'),
        intro: Yup.string().required('Required'),
        terms: Yup.boolean().oneOf([true], 'Please check the terms and conditions'),
      })}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          actions.resetForm({ firstName: '', lastName: '', email: '', intro: '', terms: false });
          actions.setSubmitting(false);
        }, 4000);
      }}
    >
      {(formik) => {
        return (
          <Form className="p-10 w-full max-w-[500px] mx-auto ">
            <MyInput
              label="First name"
              name="firstName"
              placeholder="Enter your first name"
              id="firstName"
            ></MyInput>

            <MyInput
              label="Last name"
              name="lastName"
              placeholder="Enter your last name"
              id="lastName"
            ></MyInput>

            <MyInput
              type="email"
              name="email"
              label="Email address"
              placeholder="Enter your email "
              id="email"
            ></MyInput>

            <MyTextarea
              label="Intro yourself"
              name="intro"
              placeholder="Enter your intro "
              id="intro"
            ></MyTextarea>

            <MySelectBox
              label="Select your job"
              name="job"
              placeholder="Enter your intro "
              id="intro"
            >
              <option value={'Frontend'}>Frontend Dev</option>
              <option value={'Backend'}>Backend Dev</option>
              <option value={'Fullstack'}>Fullstack Dev</option>
            </MySelectBox>

            <MyCheckBox name="terms">
              <p>I accept the terms and conditions</p>
            </MyCheckBox>

            <button
              type="submit"
              className="w-full p-4 text-white bg-blue-500 rounded-lg font-semibold"
              disabled={formik.isSubmitting}
            >
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

const MyInput = ({ label, ...props }) => {
  // console.log('🚀 ~ props', props);

  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input type="text" className="p-4 border border-blue-500 rounded-md" {...field} {...props} />
      {meta.touched && meta.error ? <div className="text-sm text-red-600">{meta.error}</div> : null}
    </div>
  );
};

const MyTextarea = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea
        type="text"
        className="p-4 border border-blue-500 rounded-md h-[150px] resize-none"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? <div className="text-sm text-red-600">{meta.error}</div> : null}
    </div>
  );
};

const MySelectBox = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col gap-2 mb-5">
      <label htmlFor={props.id || props.name}>{label}</label>
      <select className="p-4 border border-blue-500 rounded-md " {...field} {...props} />
      {meta.touched && meta.error ? <div className="text-sm text-red-600">{meta.error}</div> : null}
    </div>
  );
};

const MyCheckBox = ({ children, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col gap-2 mb-5">
      <label className="flex items-center gap-2">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? <div className="text-sm text-red-600">{meta.error}</div> : null}
    </div>
  );
};

export default SignUpFormFinalcopy;

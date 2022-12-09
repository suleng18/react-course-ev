import { result } from 'lodash';
import React from 'react';
import { Controller, useController, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from 'axios';
import { useEffect } from 'react';

const schemaValidation = Yup.object({
  firstName: Yup.string().required('bat buoc phai nhap').max(10, 'max = 10'),
});

const SignUpFormHookcopy = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setFocus,
    setValue,
    control,
    formState: { errors, isSubmitting, isValid, isDirty, dirtyFields },
  } = useForm({ resolver: yupResolver(schemaValidation), mode: 'onChange' });
  // console.log('🚀 ~ dirtyFields', dirtyFields);
  // console.log('🚀 ~ isValid', isValid);

  const watchShowAge = watch('showAge', false);

  const onSubmit = async (values) => {
    if (isValid) console.log('send data to backend');
    reset({
      firstName: '',
      lastName: '',
      email: '',
    });
    // const response = await axios.get('https://hn.algolia.com/api/v1/search?query=react');
    // return response.data;
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve();
    //     console.log(values);
    //   }, 4000);
    // });
  };

  useEffect(() => {
    setFocus('firstName', { shouldSelect: true });
  }, [setFocus]);

  const handleSetDemoData = () => {
    setValue('firstName', 'John');
    setValue('lastName', 'Dev');
    setValue('email', 'John@gmail.com');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-10 w-full max-w-[500px] mx-auto ">
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="firstName">Firstname</label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter your first name"
          className="p-4 border border-blue-500 rounded-md"
          {...register('firstName')}
        />
        {errors?.firstName && (
          <div className="text-sm text-red-500">{errors.firstName?.message}</div>
        )}
        {/* {errors?.firstName?.type === 'max' && (
          <div className="text-sm text-red-500">{errors.firstName?.message}</div>
        )} */}
      </div>

      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="lastName">Lastname</label>
        <input
          type="text"
          id="lastName"
          placeholder="Enter your first name"
          className="p-4 border border-blue-500 rounded-md"
          {...register('lastName')}
        />
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="email">Email address</label>
        <MyInput
          name="email"
          placeholder="Enter your email address"
          id="email"
          control={control}
        ></MyInput>
        {/* <input
          type="email"
          id="email"
          placeholder="Enter your email address"
          className="p-4 border border-blue-500 rounded-md"
          {...register('email')}
        /> */}
      </div>

      <div className="flex flex-col gap-2 mb-5">
        <input type="checkbox" {...register('showAge')} />
        {watchShowAge && <input type="number" placeholder="Enter Number" />}
      </div>

      <div>
        <button type="" className="w-full p-4 text-white bg-blue-500 rounded-lg font-semibold">
          {isSubmitting ? (
            <div className="mx-auto w-5 h-5 border-4 border-white border-t-4 border-t-transparent rounded-full animate-spin"></div>
          ) : (
            'Submit'
          )}
        </button>
      </div>

      <div>
        <button
          type="button"
          onClick={handleSetDemoData}
          className="p-5 bg-red-400 mt-5 rounded-md text-white "
        >
          Demo data
        </button>
      </div>
    </form>
  );
};

// const MyInput = ({ control, ...props }) => {
//   return (
//     <Controller
//       name={props.name}
//       control={control}
//       defaultValue=""
//       render={({ field }) => (
//         <input className="p-4 border border-blue-500 rounded-md" {...field} {...props} />
//       )}
//     ></Controller>
//   );
// };

const MyInput = ({ control, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: '',
  });
  console.log('🚀 ~ field', field);

  return <input className="p-4 border border-blue-500 rounded-md" {...field} {...props} />;
};

export default SignUpFormHookcopy;

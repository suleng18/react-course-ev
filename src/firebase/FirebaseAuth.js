import React from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth';
import { useState } from 'react';
import { auth, db } from './firebase-config';
import { addDoc, collection } from 'firebase/firestore';

const FirebaseAuth = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [userInfo, setUserInfo] = useState('');

  onAuthStateChanged(auth, (currentUser) => {
    setUserInfo(currentUser);
  });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    try {
      const cred = await createUserWithEmailAndPassword(auth, values.email, values.password);
      console.log('🚀 ~ cred', cred);

      await updateProfile(auth.currentUser, {
        displayName: 'Xuan Long',
      });
      setUserInfo(cred);
      console.log('Successfully created user');

      const userRef = collection(db, 'users');
      await addDoc(userRef, {
        email: values.email,
        password: values.password,
        id: cred.user.uid,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = () => {
    signOut(auth);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const cred = await signInWithEmailAndPassword(auth, values.email, values.password);
    setUserInfo(cred);
    console.log('Login successfuly');
  };

  return (
    <>
      <div className="w-full max-w-[500px] mx-auto bg-slate-100 shadow-lg p-5 mb-10">
        <form onSubmit={handleCreateUser}>
          <input
            type="email"
            className="p-3 rounded border border-gray-200 w-full mb-5 outline-none focus:border-blue-400"
            placeholder="Enter your email"
            name="email"
            onChange={handleInputChange}
          />
          <input
            type="password"
            className="p-3 rounded border border-gray-200 w-full mb-5 outline-none focus:border-blue-400"
            placeholder="Enter your password"
            name="password"
            onChange={handleInputChange}
          />
          <button
            className="p-3 bg-blue-500 text-sm  text-white font-medium rounded-lg w-full"
            type="submit"
          >
            SignUp
          </button>
        </form>
        <div className="mt-10 flex items-center gap-x-5">
          <span>{userInfo?.displayName}</span>
          <button
            className="p-3 bg-blue-500 text-sm  text-white font-medium rounded-lg"
            onClick={handleSignOut}
          >
            SignOut
          </button>
        </div>
      </div>
      <div className="w-full max-w-[500px] mx-auto bg-slate-100 shadow-lg p-5 mb-10">
        <form onSubmit={handleLogin}>
          <input
            type="email"
            className="p-3 rounded border border-gray-200 w-full mb-5 outline-none focus:border-blue-400"
            placeholder="Enter your email"
            name="email"
            onChange={handleInputChange}
          />
          <input
            type="password"
            className="p-3 rounded border border-gray-200 w-full mb-5 outline-none focus:border-blue-400"
            placeholder="Enter your password"
            name="password"
            onChange={handleInputChange}
          />
          <button
            className="p-3 bg-red-400 text-sm  text-white font-medium rounded-lg w-full"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default FirebaseAuth;

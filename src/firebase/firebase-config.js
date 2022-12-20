import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD5gq7oM2x5yMOZKnoYbQBeU_xH_rowPRo',
  authDomain: 'learn-firebase-574ae.firebaseapp.com',
  projectId: 'learn-firebase-574ae',
  storageBucket: 'learn-firebase-574ae.appspot.com',
  messagingSenderId: '104637913050',
  appId: '1:104637913050:web:43162347b0bd91fdbe52e3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Init service
export const db = getFirestore();
export const auth = getAuth();

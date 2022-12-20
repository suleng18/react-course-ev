import { async } from '@firebase/util';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { db } from './firebase-config';

const FirebaseApp = () => {
  const colRef = collection(db, 'posts');
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [postId, setPostId] = useState('');
  const [posts, setPosts] = useState([]);
  const [singlePost, setSinglePost] = useState('');

  useEffect(() => {
    onSnapshot(colRef, (snapshot) => {
      let posts = [];
      snapshot.docs.forEach((doc) => {
        posts.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      setPosts(posts);
    });

    const docRefSingle = doc(db, 'posts', 'dND9O3LtmFhc6oz0uaG5');
    // getDoc(docRefSingle).then((doc) => {
    //   console.log(doc.id, doc.data());
    // });
    onSnapshot(docRefSingle, (doc) => {
      console.log(doc.id, doc.data());
    });
  }, []);

  const handleAddPost = async (e) => {
    e.preventDefault();
    await addDoc(colRef, {
      title,
      author,
      createdAt: serverTimestamp(),
    });
    console.log('success');
  };

  const handleRemovePost = async (e) => {
    e.preventDefault();
    const colRefDelete = doc(db, 'posts', postId);
    await deleteDoc(colRefDelete);
    console.log('success');
  };

  const handleUpdatePost = async (e) => {
    e.preventDefault();
    // get documents ID
    const colRefUpdate = doc(db, 'posts', postId);

    await updateDoc(colRefUpdate, {
      title: 'this is a new post',
    });

    console.log('success');
  };

  useEffect(() => {
    // const colRefQuery = collection(db,'posts')
    const q = query(colRef, limit(5));
    // console.log('🚀 ~ q', q);
    onSnapshot(q, (snapshot) => {
      let posts = [];
      snapshot.docs.forEach((doc) => {
        posts.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      console.log(posts);
    });
  }, []);

  return (
    <div className="p-10">
      <div className="w-full max-w-[500px] mx-auto bg-slate-100 shadow-lg p-5 mb-10">
        <form onSubmit={handleAddPost}>
          <input
            type="text"
            className="p-3 rounded border border-gray-200 w-full mb-5 outline-none focus:border-blue-400"
            placeholder="Enter your title"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            className="p-3 rounded border border-gray-200 w-full mb-5 outline-none focus:border-blue-400"
            placeholder="Enter your author"
            name="author"
            onChange={(e) => setAuthor(e.target.value)}
          />
          <button
            className="p-3 bg-blue-500 text-sm  text-white font-medium rounded-lg w-full"
            type="submit"
          >
            Add post
          </button>
        </form>
      </div>

      <div className="w-full max-w-[500px] mx-auto bg-slate-100 shadow-lg p-5 mb-10">
        <form onSubmit={handleRemovePost}>
          <input
            type="text"
            className="p-3 rounded border border-gray-200 w-full mb-5 outline-none focus:border-blue-400"
            placeholder="Enter your id"
            name="postId"
            onChange={(e) => setPostId(e.target.value)}
          />

          <button
            className="p-3 bg-red-500 text-sm  text-white font-medium rounded-lg w-full"
            type="submit"
          >
            Remove post
          </button>
        </form>
      </div>

      <div className="w-full max-w-[500px] mx-auto bg-slate-100 shadow-lg p-5 mb-10">
        {posts.length > 0 &&
          posts.map((item, index) => (
            <div key={index}>
              <div>
                {item.title} - {item.author}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FirebaseApp;

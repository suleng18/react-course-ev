import axios from 'axios';
import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const getRandomPhoto = async (page) => {
  try {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=8`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const Photos = () => {
  const [randomPhoto, setRandomPhoto] = useState([]);
  const [nextPage, setNextPage] = useState(1);

  const handleLoadMorePhoto = useRef({});
  handleLoadMorePhoto.current = async () => {
    const images = await getRandomPhoto(nextPage);
    const newPhotos = [...randomPhoto, ...images];

    setRandomPhoto(newPhotos);

    setNextPage(nextPage + 1);
  };

  useEffect(() => {
    handleLoadMorePhoto.current();
  }, []);

  return (
    <div>
      <div className=" grid grid-cols-4 gap-5 p-5">
        {randomPhoto.length > 0 &&
          randomPhoto.map((item, index) => (
            <div key={item.id} className="p-3 bg-white shadow-md rounded-lg h-[200px]">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={item.download_url}
                alt={item.author}
              />
            </div>
          ))}
      </div>
      <div className=" text-center">
        <button
          onClick={handleLoadMorePhoto.current}
          className="inline-block px-8 py-4 bg-purple-600 text-white rounded-lg"
        >
          Load more
        </button>
      </div>
    </div>
  );
};

export default Photos;

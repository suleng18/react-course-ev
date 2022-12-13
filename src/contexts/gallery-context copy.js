import { set } from 'lodash';
import useLocalStorage from '../hooks/useLocalStorage';

const { createContext, useContext, useState } = require('react');

const fakeData = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1645040643524-8971366b4f68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80',
    isFavorite: false,
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1645088520336-62d94324e869?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=800',
    isFavorite: false,
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1645104787913-aeb889b0e190?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    isFavorite: false,
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1645069258059-6f5a71256c4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80',
    isFavorite: false,
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1645105263866-ed2be8e07981?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1853&q=80',
    isFavorite: false,
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    isFavorite: false,
  },
];

const GalleryContext = createContext();

function GalleryProvider(props) {
  const { storedValue, setValue } = useLocalStorage('photos', fakeData);
  const { storedValue: storedCart, setValue: setStoredCart } = useLocalStorage('cardItems', []);
  const [photos, setPhotos] = useState(storedValue);
  const [cardItems, setCardItems] = useState(storedCart);
  const [favoriteList, setFavoriteList] = useState([]);

  const value = {
    photos,
    cardItems,
    favoriteList,
    setPhotos,
    setCardItems,
    setFavoriteList,
    toggleFavorite,
    addToCart,
    removeFromCart,
  };

  function toggleFavorite(photoId) {
    const updatedArray = photos.map((photo) => {
      if (photo.id === photoId) {
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });
    setPhotos(updatedArray);
    setValue(updatedArray);
  }

  function addToCart(newItem) {
    setCardItems((prevItems) => {
      const isExisted = prevItems.some((item) => item.id === newItem.id);
      if (isExisted) {
        setStoredCart([...prevItems]);
        return [...prevItems];
      }
      setStoredCart([...prevItems, newItem]);
      return [...prevItems, newItem];
    });
  }

  function removeFromCart(photoId) {
    setCardItems((prevItems) => {
      const result = prevItems.filter((item) => item.id !== photoId);
      console.log('🚀 ~ result', result);
      setStoredCart(result);
      return result;
    });
  }

  return <GalleryContext.Provider value={value} {...props}></GalleryContext.Provider>;
}

function useGallery() {
  const context = useContext(GalleryContext);
  if (typeof context === 'undefined')
    throw new Error('useGallery must be used within a GalleryProvider');
  return context;
}

export { useGallery, GalleryProvider };

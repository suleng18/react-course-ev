import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

export default function useHackerNewsAPI(initialUrl, initialData) {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const handleFetchData = useRef({});
  const [url, setUrl] = useState(initialUrl);
  const isMounted = useRef(true);

  handleFetchData.current = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      if (isMounted.current) {
        setData(response.data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setErrorMessage(`The error ${error}`);
    }
  };

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    handleFetchData.current();
  }, [url]);

  return {
    setUrl,
    loading,
    errorMessage,
    data,
  };
}

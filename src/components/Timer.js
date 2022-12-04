import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [message, setMessage] = useState('suleng');

  useEffect(() => {
    const timer = setInterval(() => {
      console.log(message);
    }, 2000);

    return () => clearInterval(timer);
  }, [message]);

  return (
    <div>
      <input
        className=" border-2"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
    </div>
  );
};

export default Timer;

import { useState, useEffect } from 'react';

const setTime = () => {
  const [formattedTime, setFormattedTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const currentTime = new Date();
      const hours = currentTime.getHours();
      const minutes = currentTime.getMinutes();

      const formattedHours = hours < 10 ? `0${hours}` : hours;
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

      const timeString = `${formattedHours}:${formattedMinutes}`;

      setFormattedTime(timeString);
    };

    const intervalId = setInterval(updateTime, 2000);

    updateTime();

    return () => clearInterval(intervalId);
  }, []);

  return { formattedTime };
};

export default setTime;

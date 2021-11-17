import { useState, useEffect } from 'react';

interface IUseCountDownTimerProps {
  dueDate: Date;
}

const useCountDownTimer = ({ dueDate }: IUseCountDownTimerProps) => {
  const countdownDate = dueDate.getTime();
  const [countDownTimer, setCountDownTimer] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(() => setNewTime(), 1000);
  }, []);

  const setNewTime = () => {
    const currentTime = new Date().getTime();

    const distanceToDate = countdownDate - currentTime;

    const days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

    setCountDownTimer({ days: days, hours: hours, minutes, seconds });
  };

  return countDownTimer;
};

export default useCountDownTimer;

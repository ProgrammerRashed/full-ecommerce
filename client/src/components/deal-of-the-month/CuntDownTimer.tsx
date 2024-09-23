"use client"
import React from 'react';

const CountDownTimer: React.FC = () => {
    const targetDate = new Date("2024-12-21T10:20:25"); // Replace with your target date and time
  
    const [timeRemaining, setTimeRemaining] = React.useState<{ days: number; hours: number; minutes: number; seconds: number }>({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    });
  const calculateTimeRemaining = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      return; // Stop further calculations if time is up
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    setTimeRemaining({ days, hours, minutes, seconds });
  };

  React.useEffect(() => {
    calculateTimeRemaining();
    const intervalId = setInterval(calculateTimeRemaining, 1000);
    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return (
    <div className="countdown-timer flex gap-3">
      <div className="border border-border p-4 flex justify-center items-center flex-col rounded w-20 lg:w-24">
        <p className="text-xl font-bold">{timeRemaining.days}</p>
        <p>Days</p>
      </div>
      <div className="border border-border p-4 flex justify-center items-center flex-col rounded w-20 lg:w-24">
        <p className="text-xl font-bold">{timeRemaining.hours}</p>
        <p>Hours</p>
      </div>
      <div className="border border-border p-4 flex justify-center items-center flex-col rounded w-20 lg:w-24">
        <p className="text-xl font-bold">{timeRemaining.minutes}</p>
        <p>Minutes</p>
      </div>
      <div className="border border-border p-4 flex justify-center items-center flex-col rounded w-20 lg:w-24">
        <p className="text-xl font-bold">{timeRemaining.seconds}</p>
        <p>Sec</p>
      </div>
    </div>
  );
}

export default CountDownTimer;

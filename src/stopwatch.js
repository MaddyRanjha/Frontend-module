import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId = null;
    if (isRunning) {
      intervalId = setInterval(() => {
        setElapsedTime(prevElapsedTime => prevElapsedTime + 1);
      });
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setElapsedTime(0);
    setIsRunning(false);
  };

  const elapsedTimeInHours = Math.floor(elapsedTime / 360000);
  const elapsedTimeInMinutes = Math.floor((elapsedTime % 360000) / 6000);
  const elapsedTimeInSeconds = Math.floor((elapsedTime % 6000) / 100);
  const elapsedTimeInMilliseconds = Math.floor(elapsedTime % 100);

  return (
    <div>
      <div>
        Elapsed Time: {elapsedTimeInHours}:{elapsedTimeInMinutes}:{elapsedTimeInSeconds}:{elapsedTimeInMilliseconds}
      </div>
      <button onClick={handleStart} disabled={isRunning}>
        Start
      </button>
      <button onClick={handleStop} disabled={!isRunning}>
        Stop
      </button>
      <button onClick={handleReset} disabled={elapsedTime === 0}>
        Reset
      </button>
    </div>
  );
};

export default Stopwatch;

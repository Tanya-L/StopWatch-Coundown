import { useState, useEffect } from "react";

export const useTimer = () => {
  const [runTimer, setRunTimer] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(
    () => {
      let interval;
      if (runTimer) {
        interval = setInterval(
          () => setElapsedTime(prevElapsedTime => prevElapsedTime + 0.1),
          100
        );
      }
      return () => clearInterval(interval);
    },
    [runTimer]
  );

  return {
    runTimer,
    setRunTimer,
    elapsedTime,
    setElapsedTime
  };
};

export const useStopwatch = () => {
  const [laps, setLaps] = useState([]);
  const { runTimer, setRunTimer, elapsedTime, setElapsedTime } = useTimer();

  const handleReset = () => {
    setRunTimer(false);
    setElapsedTime(0);
    setLaps([]);
  };

  const handleAddLap = () => {
    const prevTotal =
      laps.length > 0 ? laps.reduce((acc, curr) => acc + curr, 0) : 0;
    const currentLap = laps.length > 0 ? elapsedTime - prevTotal : elapsedTime;
    runTimer && setLaps([...laps, currentLap]);
  };

  return {
    elapsedTime: elapsedTime.toFixed(1),
    laps,
    addLap: () => handleAddLap(),
    resetTimer: () => handleReset(),
    startTimer: () => setRunTimer(true),
    stopTimer: () => setRunTimer(false),
    runTimer
  };
};

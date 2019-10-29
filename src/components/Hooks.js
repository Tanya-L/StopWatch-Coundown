import { useState, useEffect } from "react";

const useTimer = () => {
  const [runTimer, setRunTimer] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [, setRefresh] = useState(false);

  // Start button clicked
  useEffect(() => {
    let interval;
    setStartTime(Date.now());
    if (runTimer) {
      interval = setInterval(() => setRefresh(x => !x), 25);
    }
    return () => {
      clearInterval(interval);
      setStartTime(0);
    }
  }, [runTimer]);

  return {
    runTimer,
    setRunTimer,
    startTime,
    setStartTime
  };
};

const useStopwatch = () => {
  const [laps, setLaps] = useState([]);
  const { runTimer, setRunTimer, startTime, setStartTime } = useTimer();

  // Reset button clicked
  const handleReset = () => {
    setRunTimer(false);
    setStartTime(0);
    setLaps([]);
  };

  // Show Result button clicked, add row with current time
  const handleAddLap = () => {
    var elapsedTime = Date.now() - startTime;
    const prevTotal =
      laps.length > 0 ? laps.reduce((acc, curr) => acc + curr, 0) : 0;
    const currentLap = laps.length > 0 ? elapsedTime - prevTotal : elapsedTime;
    runTimer && setLaps([...laps, currentLap]);
  };

  return {
    startTime: startTime,
    laps,
    addLap: () => handleAddLap(),
    resetTimer: () => handleReset(),
    startTimer: () => setRunTimer(true),
    stopTimer: () => setRunTimer(false),
    runTimer
  };
};

export { useTimer, useStopwatch };
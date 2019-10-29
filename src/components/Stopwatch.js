import React from "react";
import Button from "./Button";
import Result from "./Result";
import { useStopwatch } from "./Hooks";
import styled from "styled-components";
import "../App.css";
import Countdown from "./Countdown";

const StopWatch = () => {
  const {
    laps,
    addLap,
    runTimer,
    startTime,
    startTimer,
    stopTimer,
    resetTimer,
  } = useStopwatch();
  

  

  const handleStartStop = () => {
    runTimer ? stopTimer() : startTimer();
  };

  const handleLap = () => {
    if (runTimer) addLap();
  };

  const handleReset = () => {
    resetTimer();
  };

  return (
    <Wrap>
    <h2>Stop Watch</h2>
      <Timer>{formatTime(runTimer ? Date.now() - startTime : 0)}</Timer>
      <ButtonWrap>
        <Button
          onClick={handleStartStop}
          status={runTimer ? "running" : "stopped"}
        >
          {runTimer ? "Stop" : "Start"}
        </Button>

        <Button onClick={handleLap}>{"Show Result"}</Button>

        <Button disabled={startTime === "0.0"} onClick={handleReset}>
          {"Reset"}
        </Button>
      </ButtonWrap>
      <ButtonWrap>
        <Countdown />
      </ButtonWrap>
      
        <h2>Show result for split time</h2>
        {laps.length > 0 && <Result laps={laps} />}
      
    </Wrap>
  );
};

// format time miliseconds
function formatTime(timerMs) {
  if (timerMs === 0) {
    return "00:00:00";
  } 
  timerMs /= 1000;
  let hours = Math.floor(timerMs / 3600);
  timerMs %= 3600;
  let minutes = Math.floor(timerMs / 60);
  timerMs %= 60;
  let seconds = Math.floor(timerMs);

  var ret = "";

    ret += (hours < 10 ? "0" : "") + hours 
      + ":" + (minutes < 10 ? "0" : "") + minutes 
      + ":" + (seconds < 10 ? "0" : "") + seconds;
  return ret;
}

const Timer = styled.h1`
  font-size: 4em;
  font-weight: normal;
`;

const Wrap = styled.div`
  flex: 1;
  color: #fff;
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  padding: 0 2em;
  font-family: sans-serif;
  font-size: 22px;
`;

const ButtonWrap = styled.div`
  margin: 1em 0;
  display: flex;
  justify-content: space-between;
`;

export default StopWatch;

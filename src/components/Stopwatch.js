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
    elapsedTime,
    startTimer,
    stopTimer,
    resetTimer
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
      <Timer>{formatTime(elapsedTime)}</Timer>
      <ButtonWrap>
        <Button
          onClick={handleStartStop}
          status={runTimer ? "running" : "stopped"}
        >
          {runTimer ? "Stop" : "Start"}
        </Button>

        <Button onClick={handleLap}>{"Show Result"}</Button>

        <Button disabled={elapsedTime === "0.0"} onClick={handleReset}>
          {"Reset"}
        </Button>
      </ButtonWrap>
      <ButtonWrap>
        <Countdown />
      </ButtonWrap>
      {laps.length > 0 && <Result laps={laps} />}
    </Wrap>
  );
};

function formatTime(t) {
  var hrs = ~~(t / 3600);
  var mins = ~~((t % 3600) / 60);
  var secs = ~~t % 60;

  // Output like "1:01" or "4:03:59"
  var ret = "";

  if (hrs > 0) {
    ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
  }
  ret += "" + mins + ":" + (secs < 10 ? "0" : "");
  ret += "" + secs;
  return ret;
}

const Timer = styled.h1`
  font-size: 5em;
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

import React from "react";
import styled from "styled-components";
import CountdownButton from "./CountdownButton";
import { useState } from "react";

const Countdown = () => {
  const [timerId, setTimerId] = useState(undefined);
  const [timeLeft, setTimeLeft] = useState(0);

  const startCountdown5 = () => {
    startCountdown(5);
  };

  const startCountdown10 = () => {
    startCountdown(10);
  };

  const startCountdown15 = () => {
    startCountdown(15);
  };

  const startCountdown = startTime => {
    clearInterval(timerId);

    setTimerId(
      setInterval(() => {
        setTimeLeft(time => {
            if (time < 1) {
                clearInterval(timerId);
                return 0;
            }
            return time - 1;
        });
      }, 1000)
    );
    setTimeLeft(startTime);
  };

  return (
    <Wrap>
    <h1>Time Left: {timeLeft}</h1>
      <ButtonWrap>
        <CountdownButton time="5" onClick={startCountdown5}>
          {"5 sec"}
        </CountdownButton>
        <CountdownButton time="10" onClick={startCountdown10}>
          {"10 sec"}
        </CountdownButton>
        <CountdownButton time="15" onClick={startCountdown15}>
          {"15 sec"}
        </CountdownButton>
      </ButtonWrap>
    </Wrap>
  );
};



const ButtonWrap = styled.div`
  margin: 1em 0;
  display: flex;
  justify-content: space-between;
`;

const Wrap = styled.div`
  flex: 1;
  color: #fff;
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  font-family: sans-serif;
  font-size: 18px;
`;

export default Countdown;

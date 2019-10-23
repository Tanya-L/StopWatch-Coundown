import React from "react";
import styled from "styled-components";


const CountdownButton = styled.button`
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  border: 0;
  appearance: none;
  border-radius: 10%;
  height: 75px;
  width: 100px;
  font-size: 1.5rem;
  text-align: center;
  background: gray;
  color: black;
  transition: 0.25s ease;
  box-shadow: 0 0 0 3px #111, 0 0 0 6px gray;
  opacity: ${({ disabled }) => (disabled ? ".5" : null)};
`;

export default props => (
  <CountdownButton status={props.status} disabled={props.disabled} {...props}>
    {props.children}
  </CountdownButton>
);

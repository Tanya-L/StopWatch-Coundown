import React from "react";
import styled from "styled-components";

const getStatus = status => {
  switch (status) {
    case "running":
      return "red";
    case "stopped":
      return "green";
    default:
      return "grey";
  }
};

const StyledButton = styled.button`
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  border: 0;
  appearance: none;
  border-radius: 10%;
  height: 75px;
  width: 100px;
  font-size: 1.5rem;
  text-align: center;
  background: ${({ status }) => getStatus(status)};
  color: ${({ status }) => (status ? "#fff" : "black")};
  transition: 0.25s ease;
  box-shadow: ${({ status }) =>
    `0 0 0 3px #111, 0 0 0 6px ${getStatus(status)}`};
  opacity: ${({ disabled }) => (disabled ? ".5" : null)};
`;

export default props => (
  <StyledButton status={props.status} disabled={props.disabled} {...props}>
    {props.children}
  </StyledButton>
);

import styled from "styled-components";

export const List = styled.ol`
  list-style: none;
  margin: 0;
  padding: 0;
  margin-bottom: 10px;
`;

const getStatus = status => {
  switch (status) {
    case "best":
      return "green";
    case "worst":
      return "red";
    default:
      return "darkgray";
  }
};

export const Item = styled.li`
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  color: ${({ status }) => getStatus(status)}
`;

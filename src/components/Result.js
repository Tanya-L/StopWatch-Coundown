import React from "react";
import { List, Item } from "./List";

const Result = ({ laps }) => {
  const bestResult = Math.min(...laps);
  const worstResult = Math.max(...laps);

  return (
    <List>
      {laps.map((lap, i) => {
        const isbestResult = lap === bestResult;
        const isworstResult = lap === worstResult;
        const getLapStatus = () => {
          if (isbestResult && isworstResult) return;
          if (isbestResult) {
            return "best";
          } else if (isworstResult) {
            return "worst";
          }
          return null;
        };
        return (
          <Item key={i} status={getLapStatus()}>
            Result {i + 1}
            <span>{+(lap / 1000).toFixed(3)}s</span>
          </Item>
        );
      })}
    </List>
  );
};

export default Result;

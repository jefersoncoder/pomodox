import React from "react";
import { formatSecond, secondToMinute } from "../../utils/timer";
import Clock from "./Clock";
import ProgressTimer from "./ProgressTimer";

interface IProps {
  timer: {
    initial: number;
    current: number;
  };
}

function Timer({ timer }: IProps) {
  return (
    <ProgressTimer max={timer.initial} progress={timer.current}>
      <Clock
        minutes={secondToMinute(timer.current)}
        seconds={formatSecond(timer.current)}
      />
    </ProgressTimer>
  );
}

export default Timer;

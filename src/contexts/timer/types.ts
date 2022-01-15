import { Dispatch, ReactNode, SetStateAction } from "react";

export interface ITimer {
  initial: number;
  current: number;
}

export interface ITimerContext {
  status: "focus" | "short" | "long";
  stack: {
    maximum: number;
    current: number;
  };
  play: {
    isPlay: boolean;
    setIsPlay: Dispatch<SetStateAction<boolean>>;
  };
  timerFocus: ITimer;
  timerShort: ITimer;
  timerLong: ITimer;
}

export interface IProps {
  children: ReactNode;
}

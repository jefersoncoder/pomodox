import { createContext } from "react";
import { ITimer, ITimerContext } from "./types";

const TimerContext = createContext<ITimerContext>({} as ITimerContext);

export default TimerContext;

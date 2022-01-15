import { useContext } from "react";
import TimerContext from "../contexts/timer/contex";

function useTimer() {
  const {
    status,
    stack,
    play,
    timerFocus,
    timerLong,
    timerShort,
    setTimerFocus,
    setTimerLong,
    setTimerShort,
  } = useContext(TimerContext);
  return {
    status,
    setTimerFocus,
    setTimerShort,
    setTimerLong,
    stack,
    play,
    timerFocus,
    timerShort,
    timerLong,
  };
}

export default useTimer;

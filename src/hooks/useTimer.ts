import { useContext } from "react";
import TimerContext from "../contexts/timer/contex";

function useTimer() {
  const { status, stack, play, timerFocus, timerLong, timerShort } =
    useContext(TimerContext);
  return { status, stack, play, timerFocus, timerShort, timerLong };
}

export default useTimer;

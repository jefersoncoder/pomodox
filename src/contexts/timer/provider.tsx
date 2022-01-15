import React, { useEffect, useRef, useState } from "react";
import TimerContext from "./contex";
import { IProps, ITimer } from "./types";

const TimerProvider = ({ children }: IProps) => {
  const [stack, setStack] = useState({ maximum: 4, current: 0 });
  const [status, setStatus] = useState<"focus" | "short" | "long">("focus");
  const [isPlay, setIsPlay] = useState(false);
  const [timerFocus, setTimerFocus] = useState<ITimer>({
    initial: 1500,
    current: 1500,
  });

  const [timerShort, setTimerShort] = useState<ITimer>({
    initial: 300,
    current: 300,
  });

  const [timerLong, setTimerLong] = useState<ITimer>({
    initial: 900,
    current: 900,
  });

  const intervalRef = useRef(0);

  const decrementTimerFocus = () => {
    setTimerFocus((prev) => ({ ...prev, current: prev.current - 1 }));
  };

  const decrementTimerShort = () => {
    setTimerShort((prev) => ({ ...prev, current: prev.current - 1 }));
  };

  const decrementTimerLong = () => {
    setTimerLong((prev) => ({ ...prev, current: prev.current - 1 }));
  };

  // start
  useEffect(() => {
    if (isPlay && status === "focus") {
      intervalRef.current = setInterval(decrementTimerFocus, 50);
    } else if (isPlay && status === "short") {
      intervalRef.current = setInterval(decrementTimerShort, 50);
    } else if (isPlay && status === "long") {
      intervalRef.current = setInterval(decrementTimerLong, 50);
    } else {
      clearInterval(intervalRef.current);
    }
  }, [isPlay]);

  // finish focus
  useEffect(() => {
    if (timerFocus.current === 0) {
      clearInterval(intervalRef.current);
      setIsPlay(false);
      //stack
      setStatus("short");
      setStack((prev) => ({ ...prev, current: prev.current + 1 }));
      // reset
      setTimerFocus((prev) => ({ ...prev, current: prev.initial }));
    }
  }, [timerFocus, stack]);

  // controlle stack
  useEffect(() => {
    // next
    if (stack.current == stack.maximum) {
      setStatus("long");
    }
  }, [stack]);

  // finish short
  useEffect(() => {
    if (timerShort.current === 0) {
      clearInterval(intervalRef.current);
      setIsPlay(false);
      // reset
      setTimerShort((prev) => ({ ...prev, current: prev.initial }));
      // next
      setStatus("focus");
    }
  }, [timerShort]);

  // finish long
  useEffect(() => {
    if (timerLong.current === 0) {
      clearInterval(intervalRef.current);
      setIsPlay(false);
      // reset
      setTimerLong((prev) => ({ ...prev, current: prev.initial }));
      setStack((prev) => ({ ...prev, current: 0 }));
      // next
      setStatus("focus");
    }
  }, [timerLong]);

  return (
    <TimerContext.Provider
      value={{
        status,
        stack,
        play: {
          isPlay,
          setIsPlay,
        },
        timerFocus,
        timerShort,
        timerLong,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export default TimerProvider;

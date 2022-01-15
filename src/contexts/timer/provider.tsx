import React, { useEffect, useRef, useState } from "react";
import TimerContext from "./contex";
import alarm from "../../assets/alarm-clock.mp3";
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

  useEffect(() => {
    const timer = JSON.parse(localStorage.getItem("timer") as string);
    setTimerFocus({ current: timer.focus, initial: timer.focus });
    setTimerShort({ current: timer.short, initial: timer.short });
    setTimerLong({ current: timer.long, initial: timer.long });
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "timer",
      JSON.stringify({
        focus: timerFocus.initial,
        short: timerShort.initial,
        long: timerLong.initial,
      })
    );
  }, [timerFocus.initial, timerLong.initial, timerShort]);

  // start
  useEffect(() => {
    if (isPlay && status === "focus") {
      intervalRef.current = setInterval(decrementTimerFocus, 1000);
    } else if (isPlay && status === "short") {
      intervalRef.current = setInterval(decrementTimerShort, 1000);
    } else if (isPlay && status === "long") {
      intervalRef.current = setInterval(decrementTimerLong, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
  }, [isPlay]);

  // finish focus
  useEffect(() => {
    if (timerFocus.current === 0) {
      clearInterval(intervalRef.current);
      setIsPlay(false);
      //status
      setStatus("short");
      //audio
      new Audio(alarm).play();
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
      //audio
      new Audio(alarm).play();
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
      // audio
      new Audio(alarm).play();
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
        setTimerFocus,
        setTimerLong,
        setTimerShort,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
};

export default TimerProvider;

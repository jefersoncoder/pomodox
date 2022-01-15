import React, { Fragment, useState } from "react";
import { BsFillGearFill } from "react-icons/bs";
import Slider from "../components/Setting/Slider";
import useTimer from "../hooks/useTimer";

function Setting() {
  const {
    timerFocus,
    timerShort,
    timerLong,
    setTimerLong,
    setTimerFocus,
    setTimerShort,
  } = useTimer();

  return (
    <Fragment>
      <div className="w-full h-full px-4">
        <div className="w-full pb-8 p-4 bg-red-400 shadow-sm rounded-md">
          <p className="text-white py-2 text-xs font-semibold antialiased tracking-wider">
            Focus for: {timerFocus.initial / 60} Minutes
          </p>
          <Slider
            onChange={(e) =>
              setTimerFocus({ current: e * 60, initial: e * 60 })
            }
            start={timerFocus.initial / 60}
          />
        </div>
        <div className="w-full pb-8 mt-4 p-4 bg-red-400 shadow-sm rounded-md">
          <p className="text-white py-2 text-xs font-semibold antialiased tracking-wider">
            Break short for: {timerShort.initial / 60} Minutes
          </p>
          <Slider
            onChange={(e) =>
              setTimerShort({ current: e * 60, initial: e * 60 })
            }
            start={timerShort.initial / 60}
          />
        </div>
        <div className="w-full pb-8 mt-4 p-4 bg-red-400 shadow-sm rounded-md">
          <p className="text-white py-2 text-xs font-semibold antialiased tracking-wider">
            Break long for: {timerLong.initial / 60} Minutes
          </p>
          <Slider
            onChange={(e) => setTimerLong({ current: e * 60, initial: e * 60 })}
            start={timerLong.initial / 60}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default Setting;

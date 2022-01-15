import React from "react";
import {
  BsFillGearFill,
  BsFillPlayFill,
  BsFillPauseFill,
} from "react-icons/bs";
import Slider from "../components/Pomodox/Slider";
import Timer from "../components/Pomodox/Timer";
import useTimer from "../hooks/useTimer";
import { secondToMinute } from "../utils/timer";

function Pomodox() {
  const { status, stack, play, timerFocus, timerShort, timerLong } = useTimer();

  return (
    <div className="h-full flex flex-col  items-center w-80 bg-app-red-500 border-app-red-500 border-[1px] rounded-md">
      <div className="w-full h-16 p-6 text-white text-xl">
        <BsFillGearFill className="hover:text-app-red-700 cursor-pointer" />
      </div>

      {status == "focus" && <Timer timer={timerFocus} />}
      {status == "short" && <Timer timer={timerShort} />}
      {status == "long" && <Timer timer={timerLong} />}

      <div className="w-60 flex gap-4 pb-6 pt-12 px-6">
        <Slider value={stack.current * 10} />
      </div>

      <div>
        <p className="text-white text-xs font-semibold antialiased tracking-wider">
          {status == "focus" &&
            `Focus for ${secondToMinute(timerFocus.initial)} Minutes`}

          {status == "short" && `Take a short break`}
          {status == "long" && `Take a long break`}
        </p>
      </div>

      <div className="text-white flex pb-8 pt-8 justify-center w-full p-4 text-4xl">
        {!play.isPlay && (
          <BsFillPlayFill
            onClick={() => play.setIsPlay(true)}
            className="hover:text-app-red-700 cursor-pointer"
          />
        )}
        {play.isPlay && (
          <BsFillPauseFill
            onClick={() => play.setIsPlay(false)}
            className="hover:text-app-red-700 cursor-pointer"
          />
        )}
      </div>
    </div>
  );
}

export default Pomodox;

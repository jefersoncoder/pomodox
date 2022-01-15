import React, { useEffect, useState } from "react";
import Pomodox from "./layouts/pomodox";
import { BsFillGearFill, BsFillClockFill } from "react-icons/bs";
import Setting from "./layouts/Setting";
import useTimer from "./hooks/useTimer";
function App() {
  const [isPomodoro, setIsPomodoro] = useState(true);
  const { play } = useTimer();
  useEffect(() => {
    play.setIsPlay(false);
  }, [isPomodoro]);

  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full flex justify-center p-10 bg-app-dark">
        <div className="h-[504px] flex flex-col  items-center w-80 bg-app-red-500 border-app-red-500 border-[1px] rounded-md">
          <div className="w-full h-16 p-6 text-white text-xl">
            {isPomodoro && (
              <BsFillGearFill
                onClick={() => setIsPomodoro(false)}
                className="hover:text-app-red-700 cursor-pointer"
              />
            )}
            {!isPomodoro && (
              <BsFillClockFill
                onClick={() => setIsPomodoro(true)}
                className="hover:text-app-red-700 cursor-pointer"
              />
            )}
          </div>

          {isPomodoro && <Pomodox />}
          {!isPomodoro && <Setting />}
        </div>
      </div>
    </div>
  );
}

export default App;

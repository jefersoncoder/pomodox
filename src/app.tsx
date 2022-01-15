import React from "react";
import TimerProvider from "./contexts/timer/provider";
import Pomodox from "./layouts/pomodox";

function App() {
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full flex justify-center p-20 bg-app-dark">
        <TimerProvider>
          <Pomodox />
        </TimerProvider>
      </div>
    </div>
  );
}

export default App;

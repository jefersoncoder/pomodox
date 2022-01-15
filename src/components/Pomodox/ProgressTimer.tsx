import React, { ReactNode } from "react";
import Customizable from "react-customizable-progressbar";

interface IProps {
  children: ReactNode;
  progress: number;
  max: number;
}

function ProgressTimer({ children, progress, max }: IProps) {
  return (
    <Customizable
      progress={progress}
      steps={max}
      radius={110}
      strokeWidth={4}
      strokeColor="#ffffff"
      pointerRadius={5}
      pointerStrokeWidth={2}
      pointerStrokeColor="#ffffff"
      pointerFillColor="#ffffff"
      trackStrokeWidth={2}
      trackStrokeColor="#dc1717"
    >
      <div className="indicator">{children}</div>
    </Customizable>
  );
}

export default ProgressTimer;

import React from "react";

interface IProps {
  seconds: number;
  minutes: number;
}

function Clock({ seconds, minutes }: IProps) {
  return (
    <div>
      <p className="text-white antialiased font-montserrat text-5xl  ">
        <span>{`0${minutes}`.slice(-2)}</span>
        <span>:</span>
        <span>{`0${seconds}`.slice(-2)}</span>
      </p>
    </div>
  );
}

export default Clock;

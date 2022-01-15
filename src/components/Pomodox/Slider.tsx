import React from "react";
import SliderRC from "rc-slider";
import "rc-slider/assets/index.css";

interface ISliderProps {
  value: number;
}

function Slider({ value }: ISliderProps) {
  return (
    <SliderRC
      value={value}
      max={40}
      marks={{ 0: "", 10: "", 20: "", 30: "", 40: "" }}
      included
      disabled
      style={{ background: "none" }}
      railStyle={{ background: "#dc1717" }}
      trackStyle={{ background: "#fff" }}
      dotStyle={{ background: "#fff", borderColor: "#fff", cursor: "help" }}
      handleStyle={{ background: "#fff", borderColor: "#fff" }}
    />
  );
}

export default Slider;

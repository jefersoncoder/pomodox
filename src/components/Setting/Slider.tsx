import React from "react";
import SliderRC from "rc-slider";
import "rc-slider/assets/index.css";

interface ISliderProps {
  onChange: (e: number) => void;
  start?: number;
}

function Slider({ start, onChange }: ISliderProps) {
  return (
    <SliderRC
      defaultValue={start}
      onChange={onChange}
      max={60}
      step={5}
      dots={true}
      marks={{
        0: "0",
        10: "10",
        20: "20",
        30: "30",
        40: "40",
        50: "50",
        60: "60",
      }}
      style={{ background: "none" }}
      railStyle={{ background: "#dc1717" }}
      trackStyle={{ background: "#fff" }}
      activeDotStyle={{ background: "#fff", borderColor: "#fff" }}
      dotStyle={{
        background: "#dc1717",
        borderColor: "#dc1717",
      }}
      handleStyle={{ background: "#fff", borderColor: "#fff" }}
    />
  );
}

export default Slider;

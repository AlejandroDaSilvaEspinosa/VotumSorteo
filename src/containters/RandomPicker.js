import React, { useEffect, useState } from "react";
import RandomPickerChoice from "../components/RandomPickerChoice";
import RandomPickerControls from "../components/RandomPickerControls";
import IntervalPicker from "../components/IntervalPicker";
import MultiRangeSlider from "../components/MultiRangeSlider";

let interval = null;
const intervalDuration = 25;
const duration = 1000;

const RandomPicker = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [choice, setChoice] = useState(0);
  const [minRange, setMinRange] = useState(1);
  const [maxRange, setMaxRange] = useState(1000);
  const pickChoice = () => {
    const choice = Math.floor(
      Math.random() * (maxRange - minRange + 1) + minRange
    );
    setChoice(choice);
  };

  const start = () => {
    clearInterval(interval);
    interval = setInterval(() => pickChoice(), intervalDuration);
    setIsRunning(true);
  };
  const stop = () => {
    clearInterval(interval);
    setIsRunning(false);
  };
  const reset = () => {
    clearInterval(interval);
    setIsRunning(false);
    setChoice(0);
  };
  useEffect(() => {
    if (isRunning) {
      setTimeout(() => {
        stop();
      }, duration);
    }
  }, [isRunning]);
  return (
    <div className="RandomPicker">
      <RandomPickerChoice choice={choice} />
      <RandomPickerControls
        isRunning={isRunning}
        hasChoice={choice > 0}
        start={start}
        stop={stop}
        reset={reset}
      />
      <MultiRangeSlider
        min={1}
        max={1000}
        onChange={({ min, max }) => {
          setMinRange(min);
          setMaxRange(max);
        }}
      />
    </div>
  );
};

export default RandomPicker;

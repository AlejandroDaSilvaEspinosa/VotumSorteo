import React from "react";

const RandomPickerControls = ({ isRunning, hasChoice, start, stop, reset }) => {
  return (
    <div className="RandomPicker__controls">
      <button
        className={`RandomPicker__button ${
          isRunning && "RandomPicker__button--stop"
        }`}
        onClick={isRunning ? stop : start}
      >
        {isRunning ? "stop" : "start"}
      </button>
      <button
        disabled={isRunning || !hasChoice}
        className="RandomPicker__button RandomPicker__button--reset"
        onClick={reset}
      >
        reset
      </button>
    </div>
  );
};
export default RandomPickerControls;

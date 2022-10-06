import React from "react";

const IntervalPicker = ({
  changeIntervalMin,
  changeIntervalMax,
  minValue,
  maxValue,
}) => {
  return (
    <div className="inputRange">
      <input
        value={minValue}
        onChange={changeIntervalMin}
        type="number"
      ></input>
      <input
        value={maxValue}
        onChange={changeIntervalMax}
        type="number"
      ></input>
    </div>
  );
};
export default IntervalPicker;

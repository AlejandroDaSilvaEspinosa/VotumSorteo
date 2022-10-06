import React from "react";

const RandomPickerChoice = ({ choice }) => {
  const content = choice > 0 ? choice : "?";
  return (
    <div className="RandomPicker__choice">
      <span className="RandomPicker__choiceItem">{content}</span>
    </div>
  );
};
export default RandomPickerChoice;

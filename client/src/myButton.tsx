import "./myButton.css"
import React from "react";


export interface buttonProps{
  labelText: string;
  onClick: () => void;
}

const MyButton: React.FC<buttonProps> = ({labelText, onClick}: buttonProps) => {
  return (
    <button className={"MyButton"} onClick={onClick}>
      {labelText}
    </button>
  )
}

export default MyButton;
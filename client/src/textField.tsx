import React from 'react';
import "./textField.css"

export interface textFieldProps {
  reference: any;
  fieldLabel: string;
  name: string;
  id: string;
}

const TextField: React.FC<textFieldProps> = ({
  reference,
  fieldLabel,
  name,
  id,
}: textFieldProps) => {
  return (
    <div className={"textBoxDiv"} >
      <label htmlFor={id}>{fieldLabel}</label>
      <input id={id} className={"textInput"} name={name} ref={reference}></input>
    </div>
  );
};

export default TextField;

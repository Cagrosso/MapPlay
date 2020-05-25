import React from 'react';

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
    <div>
      <label htmlFor={id}>{fieldLabel}</label>
      <input id={id} name={name} ref={reference}></input>
    </div>
  );
};

export default TextField;

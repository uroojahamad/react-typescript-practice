import React from 'react'

type RadioButtonProps = {
    id: string;
    label: string;
    value: string;
    name:string;
};

const RadioButton = (props : RadioButtonProps) => {
    const {id, value, label, name} = props;
  return (
    <div>
      <input
        type="radio"
        id={id}
        value={value}
        name={name}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default RadioButton
import React from 'react'

type RadioButtonProps = {
    id: string;
    label: string;
    value: string;
    name:string;
    checked:boolean;
    onChange: (value: string) => void;
};

const RadioButton = (props : RadioButtonProps) => {
    const {id, value, label, name, checked, onChange} = props;

    const handleChange = () => {
      onChange(value);
    };

  return (
    <div>
      <input
        type="radio"
        id={id}
        value={value}
        name={name}
        checked={checked}
        onChange={handleChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export default RadioButton
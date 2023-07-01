import { useRadioButton } from "./RadioButtonProvider";

type RadioButtonProps = {
    children: string;
};

const RadioButton = (props : RadioButtonProps) => {
    const {children} = props;
    const {name, selectedOption, handleOptionChange} = useRadioButton();

    const handleChange = () => {
      handleOptionChange(children);
    };

    

  return (
    <div>
      <input
        type="radio"
        id={children}
        value={children}
        name={name}
        checked={selectedOption === children}
        onChange={handleChange}
      />
      <label htmlFor={children}>{children}</label>
    </div>
  )
}

export default RadioButton
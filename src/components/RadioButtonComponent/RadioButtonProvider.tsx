import React, { ReactNode, createContext, useContext, useState} from 'react';

type RadioButtonProps = {
    name:string;
    children:ReactNode;
}
const RadioButtonContext = createContext({
    name:"",
    selectedOption:"",
    handleOptionChange:(value:string) =>{},
});

export const useRadioButton = () =>{
    const values = useContext(RadioButtonContext);
    return values
}

const RadioButtonProvider = ({name, children}:RadioButtonProps) => {

    const [selectedOption, setSelectedOption] = useState("");
  
    const handleOptionChange = (value: string) => {
        setSelectedOption(value);
    };

  return (
    <RadioButtonContext.Provider value={{name, selectedOption, handleOptionChange}} >
        {children}
    </RadioButtonContext.Provider>
    
  )
}

export default RadioButtonProvider;
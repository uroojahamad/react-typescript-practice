import React, { useState } from "react";
import PhoneNumber from "./components/PhoneNumberComponent/PhoneNumber";
import ModalBox from "./components/ModalBoxComponent/ModalBox";
import RadioButton from "./components/RadioButtonComponent/RadioButton";
import UserRoute from "./components/login/route";
import RadioButtonProvider from "./components/RadioButtonComponent/RadioButtonProvider";

function App() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const handlePhoneNumberChange = (num: string) => {
    setPhoneNumber(num);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleModalBoxOpen = () => {
    setIsOpen(true);
  };

  const handleModalBoxClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <PhoneNumber value={phoneNumber} onChange={handlePhoneNumberChange} />

      <button
        className="mt-4 border border-black w-64 h-14 rounded-lg text-xl cursor-pointer hover:bg-slate-300 font-mono font-semibold block"
        onClick={handleModalBoxOpen}
      >
        Open Modal Box
      </button>
      {isOpen && (
        <ModalBox
          heading="Contact Us Via Email"
          description="Any question? Send us an email at prolog@profy.dev. We usually answer within 24 hours."
          onClose={handleModalBoxClose}
        />
      )}

      <RadioButtonProvider name={"gender"}>
        <RadioButton>Male</RadioButton>
        <RadioButton>Female</RadioButton>
        <RadioButton>Other</RadioButton>
      </RadioButtonProvider>

      {/* <RadioButton
        id={"female"}
        label={"Female"}
        value={"female"}
        name={"gender"}
        checked={selectedOption === 'female'}
        onChange={handleOptionChange}
      />
      <RadioButton
        id={"other"}
        label={"Other"}
        value={"other"}
        name={"gender"}
        checked={selectedOption === 'other'}
        onChange={handleOptionChange}
      /> */}

      {/* <UserRoute/> */}
    </div>
  );
}

export default App;

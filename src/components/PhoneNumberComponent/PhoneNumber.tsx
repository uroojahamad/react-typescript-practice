import {formatPhoneNumber} from './Utils'

type PhoneNumberProps = {
    value: string,
    onChange : (num : string) => void
}

const PhoneNumber = (props : PhoneNumberProps) => {
  const {value, onChange} = props

  const handleChange = (input : any) => {
    const formattedNumber = formatPhoneNumber(input)
    onChange(formattedNumber)
  };
  return (
        <input
            type="text"
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            placeholder="Enter phone number"
        />
  )
}

export default PhoneNumber;
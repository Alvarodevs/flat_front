import { Label, Input } from "./InputFormStyle"
interface Props {
  name: string,
  type: string,
  maxLength?: number,
  labelText: string,
  value?: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputForm = ({name, type, maxLength, labelText, onChange}: Props): JSX.Element => {
  return (
    <div>
      <Label htmlFor={name}>{labelText}</Label>
      <Input type={type} name={name} maxLength={maxLength} onChange={onChange}></Input>
    </div>
  )
}

export default InputForm
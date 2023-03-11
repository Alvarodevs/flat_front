import { useLocation } from 'react-router-dom'
import { Container, Label, Input } from './InputFormStyle'

interface Props {
  name: string
  type: string
  minLength?: number 
  maxLength?: number
  min?: number
  max?: number
  labelText: string
  value?: string | number
  checked?: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputForm = ({
  name,
  type,
  maxLength,
  min,
  max,
  labelText,
  onChange
}: Props): JSX.Element => {
  const location = useLocation()
  const { pathname } = location
  const isAddPage = pathname.includes('/new_product')
  return (
    <Container>
      <Label htmlFor={name} isAddSite={isAddPage}>
        {labelText}
      </Label>
      <Input
        isAddSite={isAddPage}
        type={type}
        name={name}
        maxLength={maxLength}
        min={min}
        max={max}
        onChange={onChange}
      ></Input>
    </Container>
  )
}

export default InputForm

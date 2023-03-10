import { useLocation } from 'react-router-dom'
import { Container, Label, Input } from './InputFormStyle'

interface Props {
  name: string
  type: string
  maxLength?: number
  labelText: string
  value?: string | number
  checked?: boolean
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputForm = ({
  name,
  type,
  maxLength,
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
        type={type}
        name={name}
        maxLength={maxLength}
        onChange={onChange}
      ></Input>
    </Container>
  )
}

export default InputForm

import { useState } from 'react'
import { Container, InputContainer, Input, Label, AddContainer, AddTitle } from './SearchBarStyle'
import {GrAddCircle} from 'react-icons/gr'

// type Props = {}

const SearchBar: React.FC = (): JSX.Element => {
  const [value, setValue] = useState<string>('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value)
  }

  return (
    <Container>
      <InputContainer>
        <Label>What you looking for?</Label>
        <Input
          type="form"
          name="searchbar"
          value={value}
          onChange={handleInputChange}
        />
      </InputContainer>
      <AddContainer>
        <AddTitle>Add <span>product</span></AddTitle>
        <GrAddCircle/>
      </AddContainer>
    </Container>
  )
}

export default SearchBar

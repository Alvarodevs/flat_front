import {useState} from 'react'
import { Container, Input, Label } from './SearchBarStyle'

// type Props = {}

const SearchBar: React.FC = (): JSX.Element => {
  const [value, setValue] = useState<string>('')
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value)
  }

  return (
    <Container>
      <Label>What you looking for?</Label>
      <Input 
        type='form' 
        name='searchbar' 
        value={value}
        onChange={handleInputChange}
        >
        
      </Input>
    </Container>
  )
}

export default SearchBar

import { useState } from 'react'
import {Link} from 'react-router-dom'
import { Container, InputContainer, AddContainer, AddTitle } from './SearchBarStyle'
import {GrAddCircle} from 'react-icons/gr'
import {InputForm} from '../index'

// type Props = {}

const SearchBar: React.FC = (): JSX.Element => {
  const [value, setValue] = useState<string>('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value)
    console.log(value)
  }

  return (
    <Container>
      <InputContainer>
        <InputForm name='searchbar' type='form' labelText='What are you looking for?' value={value} onChange={handleInputChange}/>
      </InputContainer>
      <AddContainer>
        <Link to={'/new_product'}>
          <AddTitle>Add <span>product</span></AddTitle>
          <GrAddCircle id='add_icon'/>
        </Link>
      </AddContainer>
    </Container>
  )
}

export default SearchBar

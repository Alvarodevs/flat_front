import { useState } from 'react'
// Redux
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import {
  getProducts,
  getProductByQuery,
  selectProducts
} from '../../features/products/productsSlice'
import { Link } from 'react-router-dom'
import {
  Container,
  InputContainer,
  AddContainer,
  AddTitle,
  QueryResult
} from './SearchBarStyle'
import { GrAddCircle } from 'react-icons/gr'
import { InputForm } from '../index'

// type Props = {}

const SearchBar: React.FC = (): JSX.Element => {
  const [value, setValue] = useState<string>('')
  const [show, setShow] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const products = useAppSelector(selectProducts)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value)
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    !value.length ? setShow(false) : setShow(true)
    if (!value) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      dispatch(getProducts())
    } else if (value) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      dispatch(getProductByQuery(value))
    }
  }

  return (
    <>
      <Container>
        <InputContainer onSubmit={handleSubmit}>
          <InputForm
            name="searchbar"
            type="form"
            labelText="What are you looking for?"
            value={value}
            onChange={handleInputChange}
          />
        </InputContainer>
        <AddContainer>
          <Link to={'/new_product'}>
            <AddTitle>
              Add <span>product</span>
            </AddTitle>
            <GrAddCircle id="add_icon" />
          </Link>
        </AddContainer>
      </Container>
      <QueryResult show={show}>
        {products.length} results for {value}
      </QueryResult>
    </>
  )
}

export default SearchBar

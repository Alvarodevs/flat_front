import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import { store } from '../../app/store'
import Home from './Home'

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Provider>
  )
  const linkElement = screen.getByText(/What are you looking for?/i)
  expect(linkElement).toBeInTheDocument()
})

export {}
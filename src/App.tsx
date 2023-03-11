import type React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router'
// Views
import AddProduct from './views/AddProduct'
import Home from './views/Home'
// Global style
import GlobalStyle from './styles/global'
import 'react-toastify/dist/ReactToastify.css';
// Components
import { Header } from './components'
import { ToastContainer } from 'react-toastify';

const App: React.FC = () => {
  return (
    <BrowserRouter>
    <ToastContainer/>

      <GlobalStyle />
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/new_product" element={<AddProduct />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

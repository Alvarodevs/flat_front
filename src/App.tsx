import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import AddProduct from './views/AddProduct';
import Home from './views/Home';
import GlobalStyle from './styles/global';

const App:React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/new_product' element={<AddProduct/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { IProduct } from './../../interfaces/IProduct';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'


// Define a type for the slice state
interface ProductsState {
  items: IProduct[],
  status: string
}

// Define the initial state using that type
const initialState: ProductsState = {
  items: [],
  status: 'idle' 
}

export const productsSlice = createSlice({
  name: 'products',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    
  },
})

//export const { FUNCTIONS TO BE EXPORTED } = productsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectProducts = (state: RootState) => state.products.items

export default productsSlice.reducer
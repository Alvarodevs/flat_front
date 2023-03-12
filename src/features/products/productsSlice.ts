import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit'
import {
  type IActionThunk,
  // type IFormData,
  type IProduct
} from '../../interfaces'
import { findByQuery, getAllProducts, addProduct } from '../../services/api'
import type { RootState } from '../../app/store'

// Define a type for the slice state
interface ProductsState {
  items: IProduct[]
  single: IProduct
  status: string
}

export const getProducts = createAsyncThunk('fetch/products', async () => {
  const response = await getAllProducts()
  return response
})

export const getProductByQuery = createAsyncThunk(
  'fetch/productByQuery',
  async (query: string) => {
    const response = await findByQuery(query)
    return response
  }
)

export const addNewProduct = createAsyncThunk(
  'post/addProduct',
  async (product: any) => {
    console.log('SLICE',product)
    const response = await addProduct(product)
    return response
  }
)

// Define the initial state using that type
const initialState: ProductsState = {
  items: [],
  single: {
    _id: '',
    name: '',
    description: '',
    image: '',
    isFavourite: false,
    price: 0,
    section: ''
  },
  status: 'idle'
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setToFavourite: (state: ProductsState, action: PayloadAction<string>) => {
      const _id = action.payload
      // eslint-disable-next-line array-callback-return
      state.items = state.items.map((product) => {
        if (product._id === _id) {
          return {
            ...product,
            isFavourite: !product.isFavourite
          }
        }
        return product
      })
    }
  },
  extraReducers: (builder) => {
    builder
      // GET all products
      .addCase(getProducts.pending, (state: ProductsState) => {
        state.status = 'loading'
      })
      .addCase(
        getProducts.fulfilled,
        (state: ProductsState, action: IActionThunk) => {
          state.items = action.payload.products
          state.status = 'ok'
        }
      )
      .addCase(getProducts.rejected, (state: ProductsState) => {
        state.status = 'ko'
      })

      // GET product by query
      .addCase(getProductByQuery.pending, (state: ProductsState) => {
        state.status = 'loading'
      })
      .addCase(
        getProductByQuery.fulfilled,
        (state: ProductsState, action: IActionThunk) => {
          state.items = action.payload.result
          state.status = 'ok'
        }
      )
      .addCase(getProductByQuery.rejected, (state: ProductsState) => {
        state.status = 'ko'
      })

      // POST new product
      .addCase(addNewProduct.pending, (state: ProductsState) => {
        state.status = 'loading'
      })
      .addCase(
        addNewProduct.fulfilled,
        (state: ProductsState, action: IActionThunk) => {
          state.status = 'ok'
        }
      )
      .addCase(addNewProduct.rejected, (state: ProductsState) => {
        state.status = 'ko'
      })
  }
})

// export const { FUNCTIONS TO BE EXPORTED } = productsSlice.actions
export const { setToFavourite } = productsSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectProducts = (state: RootState): IProduct[] => state.products.items
export const selectProduct = (state: RootState): IProduct => state.products.single
export const selectAppStatus = (state: RootState): string => state.products.status

export default productsSlice.reducer

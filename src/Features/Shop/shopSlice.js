import { createSlice } from "@reduxjs/toolkit";
import Products from '../../Data/products.json'

export const shopSlice = createSlice({
    name: "Shop",
    initialState: {
        value: {
            categorySelected: "",
            idSelected: "",
            allProducts: Products,
            productsSelected: []
        }
    },
    reducers: {
        //categoria seleccionada
        setCategorySelected: (state, action) => {
            
            state.value.productsSelected = state.value.allProducts.filter(product => product.category === action.payload)
            state.value.categorySelected = action.payload
        },
        //producto seleccionado  
        setIdSelected: (state,action) => {
            state.value.idSelected = action.payload
        }
    }
})
// exportamos accioes
export const {setCategorySelected, setIdSelected} = shopSlice.actions

export default shopSlice.reducer
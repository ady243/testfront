import {createSlice} from "@reduxjs/toolkit";
import {getData} from "../../hooks/getData";

const {products} = getData();

const initialState = {
    products: [],
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.products = [...state.products, action.payload]

        },
        editProduct: (state, action) => {
            state.products = state.products.map(product => {
                if (product.id === action.payload.id) {
                    return {
                        ...product,
                        ...action.payload
                    }
                }
                return product
            })
        },
        removeProduct: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload)
        }
    }
});

export const {addProduct, editProduct, removeProduct} = productSlice.actions;

export default productSlice.reducer;
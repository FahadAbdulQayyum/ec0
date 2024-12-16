import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ProductType = {
    id: string;
    status: string;
    color: string;
    desc: string;
    category: string;
    image: string;
    title: string;
    price: string;
}

// Define the initial state for the product slice
const initialState: { products: ProductType[] } = {
    products: [],
};

// Example slice
const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        // Add a product to the array
        addProduct: (state, action: PayloadAction<ProductType>) => {
            state.products.push(action.payload);
        },

        // Remove a product by ID
        removeProduct: (state, action: PayloadAction<string>) => {
            state.products = state.products.filter((product) => product.id !== action.payload);
        },

        // Update a product by ID
        updateProduct: (state, action: PayloadAction<ProductType>) => {
            const index = state.products.findIndex((product) => product.id === action.payload.id);
            if (index !== -1) {
                state.products[index] = action.payload;
            }
        },
    },
});

export const { addProduct, removeProduct, updateProduct } = productSlice.actions;
export default productSlice.reducer;
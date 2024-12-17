// src/store/productSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

export interface ProductState {
    products: Product[];
}

const initialState: ProductState = {
    products: [],
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            state.products.push(action.payload);
        },
        removeProduct: (state, action: PayloadAction<string>) => {
            state.products = state.products.filter(
                (product) => product.id !== action.payload
            );
        },
    },
});

export const { addProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;  // Make sure you're exporting the reducer





// // src/store/productSlice.ts
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface Product {
//     id: string;
//     name: string;
//     price: number;
//     quantity: number;
// }

// export interface ProductState {
//     products: Product[];
// }

// const initialState: ProductState = {
//     products: [],
// };

// export const productSlice = createSlice({
//     name: 'product',
//     initialState,
//     reducers: {
//         addProduct: (state, action: PayloadAction<Product>) => {
//             state.products.push(action.payload);
//         },
//         removeProduct: (state, action: PayloadAction<string>) => {
//             state.products = state.products.filter(
//                 (product) => product.id !== action.payload
//             );
//         },
//     },
// });

// export const { addProduct, removeProduct } = productSlice.actions;
// export default productSlice.reducer;  // Ensure this is exporting the reducer







// // // src/store/productSlice.ts
// // import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// // interface Product {
// //     id: string;
// //     name: string;
// //     price: number;
// //     quantity: number;
// // }

// // export interface ProductState {
// //     products: Product[];
// // }

// // const initialState: ProductState = {
// //     products: [],
// // };

// // export const productSlice = createSlice({
// //     name: 'product',
// //     initialState,
// //     reducers: {
// //         addProduct: (state, action: PayloadAction<Product>) => {
// //             state.products.push(action.payload);
// //         },
// //         removeProduct: (state, action: PayloadAction<string>) => {
// //             state.products = state.products.filter(
// //                 (product) => product.id !== action.payload
// //             );
// //         },
// //     },
// // });

// // export const { addProduct, removeProduct } = productSlice.actions;
// // export default productSlice.reducer;








// // // import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// // // interface Product {
// // //     id: string;
// // //     name: string;
// // //     price: number;
// // //     quantity: number;
// // //     imageUrl: string;
// // // }

// // // interface ProductState {
// // //     products: Product[];
// // // }

// // // const initialState: ProductState = {
// // //     products: [],
// // // };

// // // export const productSlice = createSlice({
// // //     name: 'product',
// // //     initialState,
// // //     reducers: {
// // //         addProduct: (state, action: PayloadAction<Product>) => {
// // //             state.products.push(action.payload);
// // //         },
// // //         removeProduct: (state, action: PayloadAction<string>) => {
// // //             state.products = state.products.filter(
// // //                 (product) => product.id !== action.payload
// // //             );
// // //         },
// // //     },
// // // });

// // // export const { addProduct, removeProduct } = productSlice.actions;
// // // export default productSlice.reducer;

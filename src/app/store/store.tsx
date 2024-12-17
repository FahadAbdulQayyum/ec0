// src/store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';  // Import the reducer correctly
import { loadState, saveState } from './localStorage';

const persistedState = loadState();  // Load persisted state from localStorage

// Configure the Redux store
export const store = configureStore({
    reducer: {
        product: productReducer,  // Ensure that `product` is mapped correctly
    },
    preloadedState: persistedState,  // Set the preloaded state
});

// Persist the state to localStorage on each change
store.subscribe(() => {
    saveState({
        product: store.getState().product,  // Save only the `product` slice of the state
    });
});

export type RootState = ReturnType<typeof store.getState>;  // Infer RootState from the store
export type AppDispatch = typeof store.dispatch;  // Infer AppDispatch from the store







// // src/store/store.ts
// import { configureStore } from '@reduxjs/toolkit';
// import productReducer from './productSlice';
// import { loadState, saveState } from './localStorage';

// // Load the persisted state from localStorage
// const persistedState = loadState();

// // Store setup
// export const store = configureStore({
//     reducer: {
//         product: productReducer,  // Ensure this matches with your state structure
//     },
//     preloadedState: persistedState, // Preload the persisted state correctly
// });

// // Subscribe to changes in the store and save to localStorage
// store.subscribe(() => {
//     saveState({
//         product: store.getState().product,  // Save only the `product` state
//     });
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;







// // // src/store/store.ts
// // import { configureStore } from '@reduxjs/toolkit';
// // import productReducer from './productSlice';
// // import { loadState, saveState } from './localStorage';

// // // Load state from localStorage
// // const persistedState = loadState();

// // export const store = configureStore({
// //     reducer: {
// //         product: productReducer,  // Reducer stays as is
// //     },
// //     preloadedState: persistedState,  // Pass the persisted state here
// // });

// // // Subscribe to state changes and save to localStorage
// // store.subscribe(() => {
// //     saveState({
// //         product: store.getState().product,  // Save product state only
// //     });
// // });

// // export type RootState = ReturnType<typeof store.getState>;
// // export type AppDispatch = typeof store.dispatch;







// // // import { configureStore } from '@reduxjs/toolkit';
// // // import productReducer from './productSlice';
// // // import { loadState, saveState } from './localStorage';

// // // // Load state from localStorage
// // // const preloadedState = loadState();

// // // export const store = configureStore({
// // //     reducer: {
// // //         product: productReducer, // Add product slice
// // //     },
// // //     preloadedState, // Use preloaded state
// // // });

// // // // Subscribe to state changes and save to localStorage
// // // store.subscribe(() => {
// // //     saveState({
// // //         product: store.getState().product, // Save only the product slice
// // //     });
// // // });

// // // export type RootState = ReturnType<typeof store.getState>;
// // // export type AppDispatch = typeof store.dispatch;





// // // // import { configureStore } from '@reduxjs/toolkit';
// // // // import productReducer from './productSlice';

// // // // export const store = configureStore({
// // // //     reducer: {
// // // //         product: productReducer, // Ensure "product" matches the slice name
// // // //     },
// // // // });

// // // // // Explicitly define RootState and AppDispatch
// // // // export type RootState = ReturnType<typeof store.getState>;
// // // // export type AppDispatch = typeof store.dispatch;

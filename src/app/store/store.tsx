import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';

export const store = configureStore({
    reducer: {
        product: productReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;






// // src/store/store.ts
// import { configureStore } from '@reduxjs/toolkit';
// import productReducer from './productSlice';  // Import the reducer correctly
// import { loadState, saveState } from './localStorage';

// const persistedState = loadState();  // Load persisted state from localStorage

// // Configure the Redux store
// export const store = configureStore({
//     reducer: {
//         product: productReducer,  // Ensure that `product` is mapped correctly
//     },
//     preloadedState: persistedState,  // Set the preloaded state
// });

// // Persist the state to localStorage on each change
// store.subscribe(() => {
//     saveState({
//         product: store.getState().product,  // Save only the `product` slice of the state
//     });
// });

// export type RootState = ReturnType<typeof store.getState>;  // Infer RootState from the store
// export type AppDispatch = typeof store.dispatch;  // Infer AppDispatch from the store
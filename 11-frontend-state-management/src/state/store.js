import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './slices/phoneNumber.js';

export const store = configureStore({
    reducer: {
        phoneNumber: reducer,
    },
});
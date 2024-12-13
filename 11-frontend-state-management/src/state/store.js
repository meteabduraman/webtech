import { configureStore } from '@reduxjs/toolkit';
import { reducer as phoneNumberReducer } from './slices/phoneNumber.js';
import { reducer as accountsReducer } from './slices/accounts.js';

export const store = configureStore({
    reducer: {
        phoneNumber: phoneNumberReducer,
        accounts: accountsReducer,
    },
});
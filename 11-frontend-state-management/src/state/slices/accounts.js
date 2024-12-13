import { createSlice } from "@reduxjs/toolkit";

const accountsSlice = createSlice({
    name: 'accounts',
    initialState: {
        value: [],
    },
    reducers: {
        setAccounts: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setAccounts } = accountsSlice.actions;
export const { reducer } = accountsSlice;
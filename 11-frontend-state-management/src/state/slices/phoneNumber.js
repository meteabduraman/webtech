import { createSlice } from "@reduxjs/toolkit";

const phoneNumberSlice = createSlice({
    name: 'phoneNumber',
    initialState: {
        value: 'Initial phone number',
    },
    reducers: {
        change: (state, action) => {
            // basically we will call `change('something')`
            // and then the value of this state slice will change to `something`
            state.value = action.payload;
        },
    },
});

export const { change } = phoneNumberSlice.actions;
export const { reducer } = phoneNumberSlice;
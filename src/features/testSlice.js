import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    test: "test",
}

export const testSlice = createSlice({
    name: "test",
    initialState,
    reducers: {

    }
})

export const {} = testSlice.actions

export default testSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
    name: 'form',
    initialState:{
        userName: "",
        password: "",
        rememberMe: false,
    },
    reducers:{
        updateUserName: (state, action) => {
            state.userName = action.payload
        },
        updatePassword: (state, action) => {
            state.password = action.payload
        },
        updateRememberMe: (state, action) => {
            state.rememberMe = action.payload
        },
    },
})

export const {updateUserName, updatePassword, updateRememberMe} = formSlice.actions

export default formSlice.reducer
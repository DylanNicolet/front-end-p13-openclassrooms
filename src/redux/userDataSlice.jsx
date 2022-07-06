import { createSlice } from "@reduxjs/toolkit";

export const userDataSlice = createSlice({
    name: 'userData',
    initialState:{
        userName: "",
        password: "",
        rememberMe: false,
        userToken: "",
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
        updateUserToken: (state, action) => {
            state.userToken = action.payload
        },
    },
})

export const {updateUserName, updatePassword, updateRememberMe, updateUserToken} = userDataSlice.actions

export default userDataSlice.reducer
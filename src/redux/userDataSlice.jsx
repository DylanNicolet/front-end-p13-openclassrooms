import { createSlice } from "@reduxjs/toolkit";

export const userDataSlice = createSlice({
    name: 'userData',
    initialState:{
        userName: "",
        password: "",
        rememberMe: false,
        userToken: "",
        firstName: "",
        lastName: "",
        modalStatus: false,
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
        updateFirstName: (state, action) => {
            state.firstName = action.payload
        },
        updateLastName: (state, action) => {
            state.lastName = action.payload
        },
        updateModalStatus: (state, action) => {
            state.modalStatus = action.payload
        },
    },
})

export const {updateUserName, updatePassword, updateRememberMe, updateUserToken, updateFirstName, updateLastName, updateModalStatus} = userDataSlice.actions

export default userDataSlice.reducer
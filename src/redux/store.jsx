import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import userDataSlice from "./userDataSlice";

export default configureStore({
    reducer: {
        counter: counterReducer,
        userData: userDataSlice,
    },
})
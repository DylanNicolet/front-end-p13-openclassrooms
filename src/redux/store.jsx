import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import formReducer from "./formSlice";

export default configureStore({
    reducer: {
        counter: counterReducer,
        form: formReducer,
    },
})
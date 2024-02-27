import { configureStore } from "@reduxjs/toolkit";
import CreateTaskSlice from "./features/createTask/CreateTaskSlice";

const store = configureStore({
    reducer: {
        task: CreateTaskSlice
    }
});

export default store;
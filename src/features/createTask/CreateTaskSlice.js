import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const tasks = createAsyncThunk(
    'createTask',
    async (data) => {
        console.log(data);
        const res = await axios.post('http://localhost:3030', data);
        console.log(res.data);
        return res.data;
    },
);

export const getTasks = createAsyncThunk(
    'getTasks',
    async () => {
        const res = await axios.get('http://localhost:3030');
        return res.data;
    },
);

const initialState = {
    task: [],
    status: '',
    getTasks: []
};

const taskSlice = createSlice({
    name: 'createTask',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(tasks.pending, (state) => {
                state.status = "Loading.."
            })
            .addCase(tasks.fulfilled, (state, action) => {
                state.status = "success"
                state.task = action.payload
            })
            .addCase(tasks.rejected, (state) => {
                state.status = "Failed";
            })

            .addCase(getTasks.pending, (state) => {
                state.status = "Loading.."
            })
            .addCase(getTasks.fulfilled, (state, action) => {
                state.status = "success"
                state.getTasks = action.payload
            })
            .addCase(getTasks.rejected, (state) => {
                state.status = "Failed";
            })
    }
})

export default taskSlice.reducer;
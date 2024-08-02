import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";
import { toast } from 'react-toastify';

const baseUrl = "http://localhost:3000/"
export const fetchComponent2 = createAsyncThunk("fetchComponent2", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${baseUrl}api/v1/component-2`);
        return response.data;

    } catch (error) {
        console.log(error)
        return rejectWithValue(error.response.data.message);
    }
});

export const fetchComponent4_storage = createAsyncThunk("fetchComponent4_storage", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${baseUrl}api/v1/component-4`);
        return response.data;

    } catch (error) {
        console.log(error)
        return rejectWithValue(error.response.data.message);
    }
});

export const fetchComponent6 = createAsyncThunk("fetchComponent6", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${baseUrl}api/v1/component-6`);
        return response.data;

    } catch (error) {
        console.log(error)
        return rejectWithValue(error.response.data.message);
    }
});



export const storageSlice = createSlice({
    name: 'storage',
    initialState: {
        component2: [],
        loadingComponent2: false,

        component4_storage: {},
        loadingComponent4_storage: false,

        component6: [],
        loadingComponent6: false,
    },

    extraReducers: (builder) => {
        builder
            // fetchComponent2
            .addCase(fetchComponent2.pending, (state) => {
                state.loadingComponent2 = true;
            })

            .addCase(fetchComponent2.fulfilled, (state, action) => {
                const { success, component2Data } = action.payload
                if (success)
                    state.component2 = component2Data.map(row => row)
                state.loadingComponent2 = false;
            })
            .addCase(fetchComponent2.rejected, (state, action) => {
                state.loadingComponent2 = false;
                toast.error(action.payload)
            })

            // fetchComponent4_storage
            .addCase(fetchComponent4_storage.pending, (state) => {
                state.loadingComponent4_storage = true;
            })

            .addCase(fetchComponent4_storage.fulfilled, (state, action) => {
                const { success, webSales, offlineSales } = action.payload
                if (success)
                    state.component4_storage = {webSales, offlineSales}
                state.loadingComponent4_storage = false;
            })
            .addCase(fetchComponent4_storage.rejected, (state, action) => {
                state.loadingComponent4_storage = false;
                toast.error(action.payload)
            })

            // fetchComponent6
            .addCase(fetchComponent6.pending, (state) => {
                state.loadingComponent6 = true;
            })

            .addCase(fetchComponent6.fulfilled, (state, action) => {
                const { success, component6Data } = action.payload
                if (success) {
                    state.component6 = component6Data.map(row => {
                        return { ...row, rating: row.rating.toFixed(2) }
                    })
                }
                state.loadingComponent6 = false;
            })
            .addCase(fetchComponent6.rejected, (state, action) => {
                state.loadingComponent6 = false;
                toast.error(action.payload)
            })
    }
})

export default storageSlice.reducer
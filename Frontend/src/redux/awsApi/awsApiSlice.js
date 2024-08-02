import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios";
import { toast } from 'react-toastify';

export const fetchComponent1AWS = createAsyncThunk("fetchComponent1AWS", async (_, { rejectWithValue }) => {
    try {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${btoa(`${import.meta.env.VITE_USERNAME}:${import.meta.env.VITE_PASSWORD}`)}`
        };
        const response = await axios.get('http://ec2-3-83-254-115.compute-1.amazonaws.com:8020/api/v1/sample_assignment_api_1/', { headers });
        return response.data;

    } catch (error) {
        console.log(error)
        return rejectWithValue(error.response.data.message);
    }
});

export const fetchComponent3AWS = createAsyncThunk("fetchComponent3AWS", async (_, { rejectWithValue }) => {
    try {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${btoa(`${import.meta.env.VITE_USERNAME}:${import.meta.env.VITE_PASSWORD}`)}`
        };
        const response = await axios.get('http://ec2-3-83-254-115.compute-1.amazonaws.com:8020/api/v1/sample_assignment_api_3/', { headers });
        return response.data;

    } catch (error) {
        console.log(error)
        return rejectWithValue(error.response.data.message);
    }
});

export const fetchComponent4AWS = createAsyncThunk("fetchComponent4AWS", async (_, { rejectWithValue }) => {
    try {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${btoa(`${import.meta.env.VITE_USERNAME}:${import.meta.env.VITE_PASSWORD}`)}`
        };
        const response = await axios.get('http://ec2-3-83-254-115.compute-1.amazonaws.com:8020/api/v1/sample_assignment_api_4/', { headers });
        return response.data;

    } catch (error) {
        console.log(error)
        return rejectWithValue(error.response.data.message);
    }
});

export const fetchComponent5AWS = createAsyncThunk("fetchComponent5AWS", async (_, { rejectWithValue }) => {
    try {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Basic ${btoa(`${import.meta.env.VITE_USERNAME}:${import.meta.env.VITE_PASSWORD}`)}`
        };
        const response = await axios.get('http://ec2-3-83-254-115.compute-1.amazonaws.com:8020/api/v1/sample_assignment_api_5/', { headers });
        return response.data;

    } catch (error) {
        console.log(error)
        return rejectWithValue(error.response.data.message);
    }
});

export const awsApiSlice = createSlice({
    name: 'awsApi',
    initialState: {
        component1: [],
        loadingComponent1: false,

        component3: {},
        loadingComponent3: false,
        
        component4_aws: [],
        loadingComponent4_aws: false,
        
        component5: {},
        loadingComponent5: false,
    },

    extraReducers: (builder) => {
        builder
            // fetchComponent1AWS
            .addCase(fetchComponent1AWS.pending, (state) => {
                state.loadingComponent1 = true;
            })
            .addCase(fetchComponent1AWS.fulfilled, (state, action) => {
                const { purchases, refunds, revenue } = action.payload
                state.component1 = { purchases, refunds, revenue }
                state.loadingComponent1 = false;
            })
            .addCase(fetchComponent1AWS.rejected, (state, action) => {
                state.loadingComponent1 = false;
                toast.error(action.payload)
            })
            
            // fetchComponent3AWS
            .addCase(fetchComponent3AWS.pending, (state) => {
                state.loadingComponent3 = true;
            })
            .addCase(fetchComponent3AWS.fulfilled, (state, action) => {
                const { message, score, title } = action.payload
                state.component3 = { message, score, title }
                state.loadingComponent3 = false;
            })
            .addCase(fetchComponent3AWS.rejected, (state, action) => {
                state.loadingComponent3 = false;
                toast.error(action.payload)
            })
            
            // fetchComponent4AWS
            .addCase(fetchComponent4AWS.pending, (state) => {
                state.loadingComponent4_aws = true;
            })
            .addCase(fetchComponent4AWS.fulfilled, (state, action) => {
                state.component4_aws = action.payload
                state.loadingComponent4_aws = false;
            })
            .addCase(fetchComponent4AWS.rejected, (state, action) => {
                state.loadingComponent4_aws = false;
                toast.error(action.payload)
            })
            
            // fetchComponent5AWS
            .addCase(fetchComponent5AWS.pending, (state) => {
                state.loadingComponent5 = true;
            })
            .addCase(fetchComponent5AWS.fulfilled, (state, action) => {
                state.component5 = action.payload
                state.loadingComponent5 = false;
            })
            .addCase(fetchComponent5AWS.rejected, (state, action) => {
                state.loadingComponent5 = false;
                toast.error(action.payload)
            })
    }
})

export default awsApiSlice.reducer
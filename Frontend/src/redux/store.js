import { configureStore } from '@reduxjs/toolkit';
import storageReducer from './storage/storageSlice';
import awsApiReducer from './awsApi/awsApiSlice';

export const store = configureStore({
  reducer: {
    storage: storageReducer,
    awsApi: awsApiReducer
  },
})
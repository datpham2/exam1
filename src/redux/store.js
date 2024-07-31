import { configureStore } from '@reduxjs/toolkit';
import chemicalSlice from './chemicalSlice';

export default configureStore({
    reducer: {
        chemicals: chemicalSlice
    }
})



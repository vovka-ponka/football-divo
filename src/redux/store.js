import { configureStore } from '@reduxjs/toolkit';
import category from './Slice/categorySlice.js';

const store = configureStore({
  reducer: {
    category,
  },
});

export default store;

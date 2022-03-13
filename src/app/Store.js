import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../Service/UserSlice'
import appReducer from '../Service/AppSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    app: appReducer,
  },  
});
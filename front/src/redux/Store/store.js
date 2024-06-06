import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../../redux/reducer/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

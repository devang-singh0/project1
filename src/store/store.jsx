import { configureStore } from '@reduxjs/toolkit';
import courseReducer from './slices/course';
import userReducer from './slices/user';
export const store = configureStore({
    reducer: {
        course: courseReducer,
        user: userReducer,
    },
});
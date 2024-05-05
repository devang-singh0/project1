import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCourses = createAsyncThunk(
    'fetchCourses',
    async () => {
        const response = await axios.get('https://mocki.io/v1/edb4452c-68a6-4ca0-9192-01ec935f31a5');
        return response.data;
    }
);

const courseSlice = createSlice({
    name: 'course',
    initialState: {
        courses: [],
        isLoading: false,
        error: null,
        userCourses: [],
    },
    reducers: {
        searchCourse: (state, action) => {
            
          state.courses = state.courses.filter(course => 
            course.name.toLowerCase().includes(action.payload.toLowerCase()) ||
            course.instructor.toLowerCase().includes(action.payload.toLowerCase())
          );
        },
      },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCourses.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchCourses.fulfilled, (state, action) => {
                state.isLoading = false;
                state.courses = action.payload;
            })
            .addCase(fetchCourses.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});
export const { searchCourse } = courseSlice.actions;
export default courseSlice.reducer;

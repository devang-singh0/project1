import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUserCourses = createAsyncThunk(
  'fetchUserCourses',
  async () => {
    const response = await axios.get('https://mocki.io/v1/f4761f61-6dec-4bbd-995d-2e75a6427c66');
    return response.data;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: {
      id: 102,
      name: 'Johnny Deep',
      email: 'deep@johnny.com'
    },
    isLoggedIn: true,
    userCourses: [],
  },
  reducers: {
    logout: (state) => {
      state.currentUser = null;
      state.isLoggedIn = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserCourses.fulfilled, (state, action) => {
      state.userCourses = action.payload;
    })
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;

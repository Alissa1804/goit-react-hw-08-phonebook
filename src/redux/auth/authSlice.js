import { register, login, logout, fetchCurrentUser } from './auth-operations';
import { createSlice, isAnyOf } from '@reduxjs/toolkit';

const initialState = {
  user: { name: '', email: '' },
  token: null,
  isLoading: false,
  error: null,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchCurrentUser.pending, state => {
        state.isFetchingCurrentUser = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isFetchingCurrentUser = false;
      })
      .addCase(fetchCurrentUser.rejected, state => {
        state.isFetchingCurrentUser = false;
      })
      .addCase(logout.fulfilled, state => {
        state.token = null;
        state.user = { name: '', email: '' };
      })
      .addMatcher(
        isAnyOf(
          register.pending,
          login.pending,
          logout.pending,
          fetchCurrentUser.pending
        ),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          register.fulfilled,
          login.fulfilled,
          logout.fulfilled,
          fetchCurrentUser.fulfilled
        ),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(register.fulfilled, login.fulfilled),
        (state, { payload: { user, token } }) => {
          state.token = token;
          state.user = user;
        }
      )
      .addMatcher(
        isAnyOf(
          register.rejected,
          login.rejected,
          logout.rejected,
          fetchCurrentUser.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export default authSlice.reducer;
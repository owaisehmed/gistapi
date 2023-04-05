// Importing createSlice method and action creators from Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";
import { getUserList, getSpecificUserGist } from "./userActions";

// Initializing the initial state of the slice
const initialState = {
  users: [],
};

// Creating the user slice using the createSlice method
const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    // getUserList Action Cases
    builder.addCase(getUserList.fulfilled, (state, action) => {
      state.users = action.payload.data;
      state.status = "success";
    });

    builder.addCase(getUserList.pending, (state) => {
      state.status = "pending";
    });

    builder.addCase(getUserList.rejected, (state) => {
      state.status = "failed";
    });

    // getSpecificUserGist Action Cases
    builder.addCase(getSpecificUserGist.fulfilled, (state, action) => {
      state.users = action.payload.data;
      state.status = "success";
    });
    builder.addCase(getSpecificUserGist.pending, (state) => {
      state.status = "pending";
    });

    builder.addCase(getSpecificUserGist.rejected, (state) => {
      state.users = [];
      state.status = "failed";
    });
  },
});

export default userSlice.reducer;

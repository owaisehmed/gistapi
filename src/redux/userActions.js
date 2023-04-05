import { createAsyncThunk } from "@reduxjs/toolkit"; // Importing the createAsyncThunk function from the Redux Toolkit
import { getGistForUser, getPublicGists } from "../services/gistService"; // Importing functions from a gistService file to fetch data

export const getUserList = createAsyncThunk("users/getUserList", async () => {
  try {
    const response = await getPublicGists(); // Fetching the list of public gists using the imported function
    return response; // Returning the response as the payload of the action
  } catch (e) {
    console.log("Error: ", e); // Logging the error to the console for debugging purposes
    throw new Error(e);
  }
});

export const getSpecificUserGist = createAsyncThunk(
  "users/getSpecificUserGist",
  async (data) => {
    try {
      const response = await getGistForUser(data); // Fetching the specific user's gists using the imported function and the provided username
      return response; // Returning the response as the payload of the action
    } catch (e) {
      console.log("Error: ", e); // Logging the error to the console for debugging purposes
      throw new Error(e);
    }
  }
);

import { createAsyncThunk } from "@reduxjs/toolkit";
import feedbackApi from "../../api/feedbackApi";

export const getFeedbacks = createAsyncThunk(
  "feedbacks/getFeedbacks",
  async () => {
    try {
      const response = await feedbackApi.getFeedbacks();
      return response.data;
    } catch (err) {
      // Use `err.response.data` as `action.payload` for a `rejected` action,
      // by explicitly returning it using the `rejectWithValue()` utility
      return rejectWithValue(err.response.data);
    }
  }
);

export const addFeedback = createAsyncThunk(
  "feedbacks/addFeedback",
  async (feedback) => {
    try {
      const response = await feedbackApi.addFeedback(feedback);
      return response.data;
    } catch (err) {
      // Use `err.response.data` as `action.payload` for a `rejected` action,
      // by explicitly returning it using the `rejectWithValue()` utility
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteFeedback = createAsyncThunk(
  "feedbacks/deleteFeedback",
  async (id) => {
    try {
      const response = await feedbackApi.deleteFeedback(id);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

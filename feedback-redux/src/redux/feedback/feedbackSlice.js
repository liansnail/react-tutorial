import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./feedbackState";
import { getFeedbacks, addFeedback, deleteFeedback } from "./feedbackActions";

export const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {},
  // 기존 리덕스 비동기 처는 redux-thunk, redux-saga
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    //getFeedbacks
    // pending - 비동기 대기 상태
    builder.addCase(getFeedbacks.pending, (state, action) => {
      state.fetchFeedbackLoading = true;
    });
    // fulfilled - 비동기가 성공
    builder.addCase(getFeedbacks.fulfilled, (state, action) => {
      // Add user to the state array
      // immutable 
      // redux-toolkit은 immer 라이브러리를 통해 immutable 
      state.feedbacks = action.payload;
      state.fetchFeedbackLoading = false;
    });
    // rejected 비동기 실패 처리
    builder.addCase(getFeedbacks.rejected, (state, action) => {
      state.fetchfeedbackErrors = action.error;
      state.fetchFeedbackLoading = false;
    });
    // addFeedback
    builder.addCase(addFeedback.pending, (state, action) => {
      state.addFeedbackLoading = true;
    });
    builder.addCase(addFeedback.fulfilled, (state, action) => {
      state.addFeedbackLoading = false;
    });
    builder.addCase(addFeedback.rejected, (state, action) => {
      state.addFeedbackError = action.error;
      state.addFeedbackLoading = false;
    });
    // deleteFeedback
    builder.addCase(deleteFeedback.pending, (state, action) => {
      state.deleteFeedbackLoading = true;
    });
    builder.addCase(deleteFeedback.fulfilled, (state, action) => {
      state.deleteFeedbackLoading = false;
    });
    builder.addCase(deleteFeedback.rejected, (state, action) => {
      state.deleteFeedbackError = action.error;
      state.deleteFeedbackLoading = false;
    });
  },
});

export default feedbackSlice.reducer;

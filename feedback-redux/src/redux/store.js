import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import feedbackReducer from "./feedback/feedbackSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    feedbacks: feedbackReducer,
  },
});

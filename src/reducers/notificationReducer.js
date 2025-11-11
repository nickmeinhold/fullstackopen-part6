import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: "",
  reducers: {
    voteNotification(state, action) {
      const anecdote = action.payload;
      return `You voted for: '${anecdote}'`;
    },
    clearNotification() {
      return "";
    },
  },
});

export const { voteNotification, clearNotification } =
  notificationSlice.actions;
export default notificationSlice.reducer;

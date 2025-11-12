import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: "",
  reducers: {
    setNotificationMessage(state, action) {
      return action.payload;
    },
    clearNotification() {
      return "";
    },
  },
});

export const { setNotificationMessage, clearNotification } =
  notificationSlice.actions;

// Thunk action creator
export const setNotification = (message, seconds) => (dispatch) => {
  dispatch(setNotificationMessage(message));
  setTimeout(() => {
    dispatch(clearNotification());
  }, seconds * 1000);
};

export default notificationSlice.reducer;

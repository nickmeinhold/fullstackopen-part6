import { useReducer, createContext } from "react";

const notificationReducer = (state, action) => {
  switch (action.type) {
    case "SHOW":
      return { message: action.payload, visible: true };
    case "HIDE":
      return { message: "", visible: false };
    default:
      return state;
  }
};

const NotificationContext = createContext();

export const NotificationContextProvider = (props) => {
  const [notification, dispatchNotification] = useReducer(notificationReducer, {
    message: "",
    visible: false,
  });

  return (
    <NotificationContext.Provider
      value={{ notification, dispatchNotification }}
    >
      {props.children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;

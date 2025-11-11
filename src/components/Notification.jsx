import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { clearNotification } from "../reducers/notificationReducer";

const Notification = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.notification);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        dispatch(clearNotification());
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [message, dispatch]);

  if (!message) return null;

  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
    marginBottom: 10,
  };

  return <div style={style}>{message}</div>;
};

export default Notification;

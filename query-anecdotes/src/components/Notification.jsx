import NotificationContext from "./NotificationContext";
import { useContext, useEffect } from "react";

const Notification = () => {
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
    marginBottom: 5,
  };

  const { notification, dispatchNotification } =
    useContext(NotificationContext);

  useEffect(() => {
    if (notification.visible) {
      const timer = setTimeout(() => {
        dispatchNotification({ type: "HIDE" });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [notification.visible, dispatchNotification]);

  if (!notification.visible) return null;

  return <div style={style}>{notification.message}</div>;
};

export default Notification;

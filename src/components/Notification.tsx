import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import InfoIcon from "@mui/icons-material/Info";
import WarningIcon from "@mui/icons-material/Warning";
import { Button, Snackbar } from "@mui/joy";
import { SyntheticEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useStoreHooks";
import { notificationActions } from "../store/store";

const iconMap = {
  danger: <ErrorIcon />,
  success: <CheckCircleIcon />,
  info: <InfoIcon />,
  warning: <WarningIcon />,
};

export default function Notification() {
  const dispatch = useAppDispatch();
  const notification = useAppSelector((state) => state.notification.notification);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (notification) {
      setOpen(true);
    }
  }, [notification]);

  const handleClose = <T extends HTMLElement>(_event: Event | SyntheticEvent<T, Event> | null, reason?: string) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  const handleUnmount = () => {
    dispatch(notificationActions.clearNotification());
  };

  if (!notification) return null;

  return (
    <Snackbar
      autoHideDuration={5000}
      open={open}
      variant="solid"
      color={notification.color}
      onClose={handleClose}
      onUnmount={handleUnmount}
      startDecorator={iconMap[notification.icon]}
      endDecorator={
        <Button onClick={handleClose} size="sm" variant="solid" color={notification.color}>
          Dismiss
        </Button>
      }
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      {notification.message}
    </Snackbar>
  );
}

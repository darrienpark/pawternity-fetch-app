import { Snackbar, Button, SnackbarProps } from "@mui/joy";
import ErrorIcon from "@mui/icons-material/Error";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import InfoIcon from "@mui/icons-material/Info";
import WarningIcon from "@mui/icons-material/Warning";

type NotificationSnackbarProps = {
  autohideDuration?: number;
  message: string | null;
  open: boolean;
  onClose: () => void;
  variant?: "danger" | "success" | "info" | "warning";
};

const iconMap = {
  danger: <ErrorIcon />,
  success: <CheckCircleIcon />,
  info: <InfoIcon />,
  warning: <WarningIcon />,
};

const NotificationSnackbar = ({
  autohideDuration,
  message,
  open,
  onClose,
  variant = "info",
}: NotificationSnackbarProps) => {
  return (
    <Snackbar
      autoHideDuration={autohideDuration}
      open={open}
      variant="solid"
      color={variant as SnackbarProps["color"]}
      onClose={(_event, reason) => {
        if (reason === "clickaway") return;
        onClose();
      }}
      startDecorator={iconMap[variant] || <InfoIcon />}
      endDecorator={
        <Button onClick={onClose} size="sm" variant="solid" color={variant as SnackbarProps["color"]}>
          Dismiss
        </Button>
      }
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      {message}
    </Snackbar>
  );
};

export default NotificationSnackbar;

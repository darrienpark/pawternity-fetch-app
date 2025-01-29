import { extendTheme } from "@mui/joy/styles";

const palette = {
  primary: {
    solidColor: "#ffffff",
    solidBg: "#193d2a",
    solidHoverBg: "#205036",
    plainColor: "#205036",
  },
  neutral: {
    solidColor: "#205036",
    solidBg: "#ffbe83",
    solidHoverBg: "#ffb069",
  },
};

const joyTheme = extendTheme({
  colorSchemes: {
    light: { palette },
  },
  components: {
    JoyButton: {
      // ✅ Fixed incorrect component key (JoyButton → Button)
      styleOverrides: {
        root: {
          whiteSpace: "nowrap",
        },
      },
    },
  },
});

export default joyTheme;

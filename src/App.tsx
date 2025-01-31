import { CssVarsProvider as JoyCssVarsProvider } from "@mui/joy/styles";
import { THEME_ID as MATERIAL_THEME_ID, ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import store from "./store/store";
import joyTheme from "./theme/joyTheme";
import materialTheme from "./theme/materialTheme";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={{ [MATERIAL_THEME_ID]: materialTheme }}>
        <JoyCssVarsProvider theme={joyTheme}>
          <RouterProvider router={router} />
        </JoyCssVarsProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;

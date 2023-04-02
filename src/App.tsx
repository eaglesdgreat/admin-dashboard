import { CssBaseline, Theme } from '@mui/material';
import { IColorModeContext } from "types";

import { ThemeProvider } from '@mui/material/styles';
import { ColorModeContext, useMode } from 'theme';
import { RouterProvider } from "react-router-dom";
import router from "routes/router";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode as IColorModeContext}>
      <ThemeProvider theme={theme as Theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

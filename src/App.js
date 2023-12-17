import "./App.css";
import Home from "./views/home/Home";
import { ThemeProvider } from "@mui/system";
import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    action: {
      active: "#001E3C",
    },
    background: {
      main: "#350949",
      card: "#F0B4FF",
      lifeBar: "#FFFFFF",
      highHealth: "#11BA36",
      midHealth: "#FF9900",
      lowHealth: "#DB2E2E",
      bossHealth: "#838383"
    },
    mode: "dark",
    success: {
      dark: "#009688",
      main: "#009688"
    },
    text: {
      primary: "#173A5E",
      secondary: "#46505A",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;

import "./App.css";
import Home from "./views/home/Home";
import { ThemeProvider } from "@mui/system";
import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    highHealth: {
      main: '#11BA36'
    },
    midHealth: {
      main: '#FF9900'
    },
    lowHealth: {
      main: '#DB2E2E'
    },
    action: {
      active: "#001E3C",
    },
    background: {
      main: "#350949",
      card: "#F0B4FF",
      lifeBar: "#FFFFFF",
      overheal: '#FBFF31',
      highHealth: "#11BA36",
      midHealth: "#FF9900",
      lowHealth: "#DB2E2E",
      dying: "#282828",
      npcHealth: "#9637C3",
      healthBG: "#838383",
    },
    mode: "light",
    success: {
      dark: "#009688",
      main: "#009688"
    },
    text: {
      primary: "#173A5E",
      secondary: "#46505A",
      main: '#350949',
      black: "#000000",
      light: "#fdfdfd",
    },
    main: {
      dark: '#350949',
      light: '#350949',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home sx={{ color: 'text.primary' }} />
    </ThemeProvider>
  );
}

export default App;

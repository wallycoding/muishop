import { createTheme } from "@mui/material/styles";

const dark = createTheme({
  palette: {
    background: {
      default: "#080808",
      paper: "#010101",
    },
    mode: "dark",
    primary: {
      main: "#3dff9b",
      contrastText: "#111",
    },
  },
});

const light = createTheme({
  palette: {
    background: {
      default: "#ddd",
      paper: "#eee",
    },
    mode: "light",
  },
});

const themes = {
  dark,
  light,
};

export default themes;

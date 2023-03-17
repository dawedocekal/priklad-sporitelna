import { createTheme } from '@mui/material/styles';

const rawTheme = createTheme({
  palette: {
    text: {
      primary: "#0078b4"
    },
  },
  typography: {
    fontFamily: "'Work Sans', sans-serif",
    fontSize: 14,
  },
});

const fontHeader = {
  color: rawTheme.palette.text.primary,
  fontWeight: 700,
  fontFamily: "'Roboto Condensed', sans-serif",
  textAlign: 'center'
};

const theme = {
  ...rawTheme,
  typography: {
    ...rawTheme.typography,
    fontHeader,
    h1: {
      ...fontHeader,
      letterSpacing: 0,
      fontSize: 36,
    },
    h2: {
      ...fontHeader,
      fontSize: 20,
    },
    body1: {
      ...rawTheme.typography.body2,
      fontSize: 16,
    },
  },
};

export default theme;

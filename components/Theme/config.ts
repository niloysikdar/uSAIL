import { ThemeOptions } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#5e3bbe',
    },
    secondary: {
      main: '#f43f5e',
    },
    background: {
      default: '#f1f5f9',
    },
    text: {
      primary: '#1f2937',
      secondary: '#4b5563',
    },
  },
  typography: {
    fontFamily: 'Poppins',
    h1: {
      fontFamily: 'Poppins',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Rubik',
      fontWeight: 500,
    },
    h3: {
      fontFamily: 'Roboto',
    },
    h4: {
      fontFamily: 'Rubik',
    },
    subtitle1: {
      fontFamily: 'Rubik',
    },
    body1: {
      fontFamily: 'Lato',
    },
    button: {
      fontFamily: 'Poppins',
      fontWeight: 500,
      textTransform: 'none',
      fontSize: '1rem',
    },
  },
  shape: {
    borderRadius: 6,
  },
};

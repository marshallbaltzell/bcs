import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import "fontsource-nunito-sans";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '"Nunito Sans"', // https://fontsource.github.io/search-directory/#nunito-sans
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    button: {
      fontWeight: 900,
    }
  },

  /* Set theme palette base on BCS branding */
  palette: {
    primary: {
      main: '#F9A500', // orange
      contrastText: '#17325B',
    },
    secondary: {
      main: '#17325B', // dark blue
      contrastText: '#FFFFFF'
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);

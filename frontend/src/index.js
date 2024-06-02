import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import './index.css';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { SnackbarProvider } from 'notistack';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Stack } from "@mui/system";
import { amber, deepOrange, grey, yellow } from '@mui/material/colors';
//import Slider from "react-slick";
//import HorizontalScroll from "react-horizontal-scrolling";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: yellow
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <SnackbarProvider maxSnack={3}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </SnackbarProvider>
        </PersistGate>
    </Provider>
    </main>
    </ThemeProvider>
);

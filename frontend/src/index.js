import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from '../src/Component/Theme'
<<<<<<< HEAD
// import { Provider } from "react-redux";
// import { store } from "./Redux/store";
=======
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './Redux/store';
>>>>>>> 66796c06e16bc13214d2c26f6835d24d982e388b
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <BrowserRouter>
  <ChakraProvider theme={theme}>
<<<<<<< HEAD
     {/* <Provider store={store}> */}
      {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
    <App />
    {/* </Provider> */}
=======
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
         <App />
>>>>>>> 66796c06e16bc13214d2c26f6835d24d982e388b
 
    </ChakraProvider>
    </BrowserRouter>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

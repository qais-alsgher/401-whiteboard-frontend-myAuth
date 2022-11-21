import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AuthContextProvider from './Context/AuthContext';
import PostContextProvider from './Context/PostContext';
import { ChakraProvider, extendTheme, ColorModeScript } from '@chakra-ui/react';
import myTheme from './theme/index';
import { Provider } from 'react-redux';
import store from './Redux/store'
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <ChakraProvider theme={myTheme}>
        <AuthContextProvider>
          <PostContextProvider>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <App />
          </PostContextProvider>
        </AuthContextProvider>
      </ChakraProvider>
    </React.StrictMode >
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

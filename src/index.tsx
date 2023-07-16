import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {setupStore} from "./store/store";
import {ThemeProvider} from "./providers/ThemeProvider";
import {PayPalScriptProvider} from '@paypal/react-paypal-js';
import './shared/config/i18n/i18n'
import Loading from "./pages/Loading/Loading";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const store = setupStore()

root.render(
    // <React.StrictMode>
    <Suspense fallback={<Loading/>}>
        <PayPalScriptProvider options={{
            clientId: process.env.REACT_APP_PAYPAL_CLIENT_ID as string
        }}>
            <ThemeProvider>
                <Provider store={store}>
                    <BrowserRouter>
                        <App/>
                    </BrowserRouter>
                </Provider>
            </ThemeProvider>
        </PayPalScriptProvider>
    </Suspense>
    // </React.StrictMode>
)

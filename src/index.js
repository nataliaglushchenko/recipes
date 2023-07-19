import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'

import App from './App';

import 'bootstrap/dist/css/bootstrap.css';
import { api } from './service/api';

const store = configureStore({ 
    reducer: {
        [api.reducerPath]: api.reducer
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(api.middleware)
});

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider> 
);

const container = document.getElementById('app');
const root = createRoot(container);
root.render(app);

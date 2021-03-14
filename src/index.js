import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ApolloProvider } from '@apollo/react-hooks';
import { store, persistor } from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import App from './App';
import reportWebVitals from './reportWebVitals';
import apolloclient from './apolloclient';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate
                loading={null}
                persistor={persistor}
            >
                <ApolloProvider client={apolloclient}>
                    <App />
                </ApolloProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

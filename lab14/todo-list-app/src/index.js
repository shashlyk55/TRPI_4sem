import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App'
import rootReducer from './reducers';
import {Provider} from "react-redux";
import {createStore} from "redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(rootReducer);

root.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>
);

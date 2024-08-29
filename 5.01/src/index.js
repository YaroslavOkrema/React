import React from 'react';
import ReactDOM from 'react-dom/client';

import App from "./App";
import './index.css';


import { TEST1, TEST2 } from './test';

console.log(TEST1, TEST2);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      {/*<App></App>*/}
      <App />
  </React.StrictMode>
);

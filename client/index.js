
import React from 'react'
import { createRoot } from 'react-dom/client';

import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App.jsx'
import {store} from './redux/store.js'
import {Provider} from 'react-redux'
import Login from './components/Login.jsx';
const root = createRoot(document.getElementById('root'));


root.render(
  <Provider store = {store}>
<App></App>
</Provider>
  )


// root.render(
//     <Provider store = {store}>
//       <App>
//       </App>      
//       </Provider>
//     );

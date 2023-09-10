import '@less/initialize.less';
// import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'mobx-react';
import { stores } from './stores';
import { BrowserRouter } from 'react-router-dom'; // 路由
import { routes } from './routes.config';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider {...stores}>
    <App Router={BrowserRouter} routes={routes} />
  </Provider>,
);

export { routes };

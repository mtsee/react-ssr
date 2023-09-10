import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { stores } from './stores/index'; // ...
import { Provider } from 'mobx-react';

import App from './App';
import { routes } from './routes.config';

React.useLayoutEffect = React.useEffect;

// renderToHTML 不能修改原始routes
async function renderToHTML(route: any, props: any) {
  await injectSSRDataToProps(route);
  const shtml = renderToString(
    <Provider {...stores}>
      <App Router={StaticRouter} routes={routes} location={props.location} context={props.context} />
    </Provider>,
  );
  return { shtml };
}

/**
 * 获取ssr data 的 scripts数据 string
 * @param {*} route
 * @returns
 */
export async function injectSSRDataToProps(route: { component: any }) {
  let component = route.component;
  if (component.injectSSRData) {
    const res = await component.injectSSRData(route);
    try {
      component.defaultProps = { ssrRes: res };
    } catch (e) {
      console.error('组件static ssData 必须返回一个对象');
      return '<h1 style="color:red;">ssData 必须返回一个对象</h1>';
    }
  }
}

export { routes, renderToHTML };

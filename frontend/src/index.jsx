import React, { Fragment } from 'react';
import { render } from 'react-dom';

import App from './App';
import GlobalStyle from './GlobalStyle';

const renderApp = () => {
  render(
    <Fragment>
      <GlobalStyle />
      <App />
    </Fragment>,
    document.getElementById('root'),
  );
};

if (module.hot) {
  module.hot.accept(['./App.jsx'], () => renderApp(App));
}

renderApp(App);

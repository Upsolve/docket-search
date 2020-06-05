import React from 'react';
import { render } from 'react-dom';

import App from './App';

const renderApp = () => {
  render(
    <App />,
    document.getElementById('root'),
  );
};

if (module.hot) {
  module.hot.accept(['./App.jsx'], () => renderApp(App));
}

renderApp(App);

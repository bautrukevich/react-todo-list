import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import TodoApp from './TodoApp';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path='/' component={TodoApp} />
      </Router>
    </Provider>
  );
};

export default Root;

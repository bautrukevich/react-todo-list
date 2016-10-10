import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import throttle from 'lodash/throttle';

import todoApp from './reducers';
import TodoApp from './components/TodoApp';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();
const store = createStore(todoApp, persistedState);

store.subscribe(throttle(() => {
  saveState({
    todos: store.getState().todos
  });
}, 1000));

render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);

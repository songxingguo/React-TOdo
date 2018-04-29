import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from './TodoApp';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

const ALL = 'all';
const COMPLETED = 'completed';
const UNCOMPLETED = 'uncompleted';
let store = {
  todos: [
      {
          text: 'First todo',
          completed: false,
          id: 0,
      },
      {
          text: 'Second todo',
          completed: false,
          id: 1,
      }
  ],
  filter: 'all'
};

ReactDOM.render(
    <Provider store={ store }>
        <TodoApp />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();

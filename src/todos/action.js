/**
 * Created by songxingguo on 2018/4/29.
 */

import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actionTypes';

let nextTodoId = 0;

export const addTodo = (text) => ({
    type: ADD_TODO,
    completed: false,
    id: nextTodoId,
    text: text,
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id: id,
});

export const removeTodo = (id) => ({
   type: REMOVE_TODO,
    id: id,
});

//等价写法
// export const toggleTodo = (id) => {
//   return {
//       type: TOGGLE_TODO,
//       id: id,
//   }
// };
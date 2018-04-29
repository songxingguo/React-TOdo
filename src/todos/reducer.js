/**
 * Created by songxingguo on 2018/4/29.
 */

import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actionTypes';

export default (state = [], action) => {
  switch (action.type) {
      case ADD_TODO: {
          return [
              {
                  id: action.id,
                  text: action.text,
                  complete: false,
              },
              // ES6扩展操作符返回对象
              ...state,
          ]
      }
      case TOGGLE_TODO: {
          return state.map((todoItem) => {
              if (todoT=Item.id === action.id) {
                  //{}将对象展开, 后面可以覆盖展开部分
                  return {...todoItem, completed: !todoItem.completed};
              } else {
                  return todoItem;
              }
          })
      }
      case REMOVE_TODO: {
          return state.filter((todoItem) => {
              //将id匹配的待办事项过滤掉，返回新的数组
              return todoItem.id !== action.id;
          })
      }
      default: {
          return state;
      }
  }
};
/**
 * Created by songxingguo on 2018/4/29.
 */

import { creacteStore, combineReducers } from 'redux';

import { reducer as todoReducer } from './todos';
import { reducer as filterReducer } from './filter';

const reducer = combineReducers({
    todos: todoReducer,
    filter: filterReducer,
});

export default creacteStore(reducer);

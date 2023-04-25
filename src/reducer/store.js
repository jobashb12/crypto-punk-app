import { combineReducers, createStore } from 'redux';
import ReducerFunction from './reducerFuction';

const root = combineReducers({
    ReducerFunction
});

const store = createStore(root, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { todosReducers } from './reducers/todosReducer';
import { tabReducer } from './reducers/tabReducer';

import thunk from 'redux-thunk';


// const middleware = require('redux-thunk').default ;

const reducer = combineReducers({
    todos: todosReducers,
    currentTab: tabReducer,
})


const middleware = [thunk]; // is above declaration is same as the current 

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;
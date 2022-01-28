import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../redux/reducers/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

let reducers = combineReducers({
  red: reducer
});

let store = (createStore(reducers, composeWithDevTools(applyMiddleware(thunk))));

export default store;

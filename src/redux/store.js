import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './news/reducer';

const midleware = [thunk];

export default createStore(reducer, compose(
    applyMiddleware(...midleware) 
  ))

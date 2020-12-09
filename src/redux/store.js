import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './ducks';
import thunk from 'redux-thunk';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export default createStore(
  rootReducer, 
  composeEnhancers(
    applyMiddleware(thunk)
  )
);  
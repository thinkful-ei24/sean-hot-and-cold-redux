
import {createStore} from 'redux';
import gameReducer from './reducers/root';

export default createStore(gameReducer);
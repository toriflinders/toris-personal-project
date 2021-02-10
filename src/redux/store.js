import {createStore, combineReducers} from 'redux';
import authReducer from './authReducer';
import announcementsReducer from './announcementsReducer';

const rootReducer = combineReducers({
  authReducer,
  announcementsReducer
})
export default createStore(rootReducer)

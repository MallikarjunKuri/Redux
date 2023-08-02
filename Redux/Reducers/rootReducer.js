import { combineReducers } from 'redux';
import CounterReducer from './Reducers/CounterReducer';
import GetApiReducer from './Reducers/GetApiReducer';

 export default  rootReducer = combineReducers({
    count: CounterReducer,
    apiData: GetApiReducer
});
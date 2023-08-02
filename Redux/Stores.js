import { createStore, combineReducers } from 'redux';
import CounterReducer from './Reducers/CounterReducer';
import GetApiReducer from './Reducers/GetApiReducer';
const rootReducer = combineReducers({
    count: CounterReducer,
    apiData: GetApiReducer
});
export const store = createStore(rootReducer);






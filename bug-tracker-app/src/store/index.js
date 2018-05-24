import { createStore, combineReducers } from 'redux';
import { bugsReducer, spinnerReducer } from '../reducers';

let rootReducer = combineReducers({
	bugState : bugsReducer,
	spinnerState : spinnerReducer
});

{/* Store creation*/}
let appStore = createStore(rootReducer);

export default appStore;


var SM = (function(){	
	var _reducer = null,
		_init_action = '@@INIT_ACTION',
		_currentState = undefined,
		_listeners = [];

	function triggerChange(){
		_listeners.forEach(listener => listener());
	}

	function subscribe(listener){
		_listeners.push(listener);
	}

	function getState(){
		return _currentState;
	}

	function dispatch(action){
		var newState = _reducer(_currentState, action);
		if (_currentState === newState) return;
		_currentState = newState;
		triggerChange();
	}

	function createStore(reducer){
		_reducer = reducer;
		_currentState = _reducer(_currentState, _init_action);
		triggerChange();
		return {
			getState : getState,
			subscribe : subscribe,
			dispatch : dispatch
		}	
	}
	function bindActionCreators(actionCreators, dispatch){
		let result = {};
		for(let key in actionCreators){
			result[key] = function(){
				let action = actionCreators[key].apply(undefined, arguments);
				dispatch(action);
			}
		}
		return result;
	}
	return {
		createStore : createStore,
		bindActionCreators : bindActionCreators
	};
})();

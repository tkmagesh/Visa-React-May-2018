export function toggle(bugToToggle){
	let toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed};
	return { type : 'TOGGLE', payload : {oldBug : bugToToggle, newBug : toggledBug}}
}
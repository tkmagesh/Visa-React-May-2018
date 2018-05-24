export function removeClosed(bugs){
	let bugsToRemove = bugs.filter(bug => bug.isClosed);
	return { type : 'REMOVE', payload : bugsToRemove};
}
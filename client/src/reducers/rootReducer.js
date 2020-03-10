const initState = {
data: []
}


const rootReducer = (state = initState, action)=>{
	console.log(action)
	console.log(state)
	return state
}

export default(rootReducer)

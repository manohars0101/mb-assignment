
const initialState = {
    loading : false,
    users:[],
    colleges : [],
    errors : null,
}
const Reducer = (state = initialState, action) => {

    if(action.type === 'LOAD_COLLEGES_START'){
        return {
            ...state,
            loading : true
        }
    }
    if(action.type === 'LOAD_COLLEGES_SUCCESS'){
        return {
            ...state,
            loading : false,
            colleges : action.payload,
        }
    }
    if(action.type === 'LOAD_COLLEGES_FAIL'){
        return {
            ...state,
            loading : false,
            errors : action.payload,
        }
    }
    
    if(action.type === 'ADD_USER'){
        const updatedUsers = [...state.users] 
        updatedUsers.unshift(action.payload)
        return {
            ...state,
            loading : true,
            users : updatedUsers
        }
    }

    if(action.type === 'DELETE_USER'){

        const updatedUsers = state.users.filter((user) => user.id !== action.payload)

        return {
            ...state,
            loading : true,
            users : updatedUsers
        }
    }

    return initialState

}

export default Reducer;
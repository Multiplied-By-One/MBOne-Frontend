import createDataContext from './createDataContext'
// import jsonServer from '../api/jsonServer'

const getheadmates = dispatch => {
    return async () => {
        const response = "im a response" // await jsonServer.get('/headmates')
        console.log(response)
        dispatch({ type: 'get_headmates', payload: response.data })
    }
}

const addheadmate = dispatch => {
    return async (title, content, callback) => {
        // await jsonServer.post('/headmates', { title, content })
        
        const response = "add response" 
        console.log(response)

        /* 
            why is making a getheadmates() request in index.js from
            navigation more fool proof than doing get request and 
            dispatch from here? because it's not API addheadmate
            function dependent, always calls get from index.js page 
        */

        if (callback) callback()
    }
}

const deleteheadmate = dispatch => {
    return async (id) => {
        //await jsonServer.delete(`/headmates/${id}`)

        const response = "delete response" // await jsonServer.get('/headmates')
        console.log(response)

        dispatch({ type: 'delete_headmate', payload: id })
    }
}

const editheadmate = dispatch => {
    return async (id, title, content, callback) => {
            // await jsonServer.put(`/headmates/${id}`, { title, content })
        
            const response = "edit or put response" // await jsonServer.get('/headmates')
            console.log(response)
        dispatch({ type: 'edit_headmate', payload: { id, title, content }})
        if (callback) callback()
    }
}

// convention to calling first param state
// reducer func what new state should be
const HeadmateReducer = ( state, action ) => {
    switch(action.type) {
        case 'delete_headmate':
            // returns state datatype where all values == true to given condition, hence deleting current id from state
            return state.filter((headmate) => headmate.id !== action.payload)
        case 'edit_headmate':
            return state.map( headmate => {
                return headmate.id === action.payload.id ? action.payload : headmate 
            })   
        case 'get_headmates':
            return action.payload
        default:
            return state;
    }
}

export const { Context, Provider } = createDataContext(
    HeadmateReducer, 
    { addHeadmate, deleteHeadmate, editHeadmate, getHeadmates },
    []
)
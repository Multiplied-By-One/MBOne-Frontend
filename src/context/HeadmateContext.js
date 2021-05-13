import createContext from './createContext'
import jsonServer from '../api/jsonServer'

export const getheadmates = async dispatch => {
    
    const response = await jsonServer.get('/headmates') 
    dispatch({ type: 'get_headmates', payload: response.data })

}

export const addheadmate = async ( headmate, dispatch, callback ) => {
    const response = await jsonServer.post('/headmates', headmate)
    dispatch({ type: 'add_headmate', payload: headmate });
    // const response = "add response" 
    // console.log(response)

    /* 
        why is making a getheadmates() request in index.js from
        navigation more fool proof than doing get request and 
        dispatch from here? because it's not API addheadmate
        function dependent, always calls get from index.js page 
    */

    if (callback) callback()
}

export const deleteheadmate = async dispatch => {
    return id => {
        jsonServer.delete(`/headmates/${id}`)

        dispatch({ type: 'delete_headmate', payload: id })
    }
}

export const editheadmate = async dispatch => {
    return ( id, name, age, gender, traits, callback ) => {
        jsonServer.put(`/headmates/${id}`, { name, age, gender, traits })
    
        dispatch({ type: 'edit_headmate', payload: { id, name, age, gender, traits }})
        if (callback) callback()
    }
}

// convention to calling first param state
// reducer func what new state should be
export const HeadmateReducer = ( state, action ) => {
    switch(action.type) {
        case 'add_headmate':
            return [...state, action.payload];
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

const { Context, Provider } = createContext(
    HeadmateReducer, 
    { addheadmate, deleteheadmate, editheadmate, getheadmates },
)

// export const Context;
// export const Provider;

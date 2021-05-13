import createContext from './createContext'
import jsonServer from '../api/jsonServer'

export const getTraits = async dispatch => {
    
    const response = await jsonServer.get('/Traits') 
    dispatch({ type: 'get_Traits', payload: response.data })

}

export const addTraits = async ( Traits, dispatch, callback ) => {
    const response = await jsonServer.post('/Traits', Traits)
    dispatch({ type: 'add_Traits', payload: Traits });
    // const response = "add response" 
    // console.log(response)

    /* 
        why is making a getTraits() request in index.js from
        navigation more fool proof than doing get request and 
        dispatch from here? because it's not API addTraits
        function dependent, always calls get from index.js page 
    */

    if (callback) callback()
}

export const deleteTraits = async dispatch => {
    return id => {
        await jsonServer.delete(`/Traits/${id}`)

        dispatch({ type: 'delete_Traits', payload: id })
    }
}

export const editTraits = async dispatch => {
    return ( trait, callback ) => {
        await jsonServer.put(`/Traits/${id}`, { trait })
    
        dispatch({ type: 'edit_Traits', payload: { trait }})
        if (callback) callback()
    }
}

// convention to calling first param state
// reducer func what new state should be
export const TraitsReducer = ( state, action ) => {
    switch(action.type) {
        case 'add_Traits':
            return [...state, action.payload];
        case 'delete_Traits':
            // returns state datatype where all values == true to given condition, hence deleting current id from state
            return state.filter((Traits) => Traits.id !== action.payload)
        case 'edit_Traits':
            return state.map( Traits => {
                return Traits.id === action.payload.id ? action.payload : Traits 
            })   
        case 'get_Traits':
            return action.payload
        default:
            return state;
    }
}

const { Context, Provider } = createContext(
    TraitsReducer, 
    { addTraits, deleteTraits, editTraits, getTraits },
)

// export const Context;
// export const Provider;

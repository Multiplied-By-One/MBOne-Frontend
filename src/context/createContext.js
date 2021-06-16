// this file automates context creation for different resources
import React, { useReducer } from 'react'

export const Context = React.createContext()

export function ContextCreator( reducer, addFunction, deleteFunction, editFunction, getFunction ) {

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer);

        const boundActions = {}
        const actions = {addFunction, deleteFunction, editFunction, getFunction};

        for (let key in Object.keys(actions)) {
            boundActions[key] = actions[key]; //(dispatch)
        }

        return <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    }

    return Provider
}


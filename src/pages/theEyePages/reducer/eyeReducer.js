import React, { useReducer } from 'react';

export const myContext = React.createContext();

export const eyeReducer = (state, action) => {
    console.log("reducer state: ", state)

    switch (action.type) {
        case 'getHeadmates':
            state.headmates = action.headmates
            return state;
        case 'getAccounts':
            state.accounts = action.accounts
            return state;
        case 'clickAccount':
            state = { ...state, ...action.data };
            return state;
        case "isAuthenticated":
            if (state.createPassword) {
                state.pwdEnter = action.pwdEnter;
                if (state.pwdEnter === state.password) {
                    return { ...state, isMatch: true };
                } else {
                    return { ...state, isMatch: false };
                }
            } else if (state.createPassword === false) {
                state.isMatch = true;
                return state;
            } else {
                return state;
            }
        case 'getEyebox':
            state.eyebox = action.eyeboxData;
            return state
        case 'clickJournal':
            state.journal = action.journalData;
            return state;
        case 'clickEntry':
            state.journal.clickedEntry = action.entryData;
            return { ...state };
        case 'updateTitle':
            state.journal.clickedEntry.title = action.title;
            return { ...state };
        case 'updateContent':
            state.journal.clickedEntry.content = action.content;
            return { ...state };
        case 'createJournal':
            state.journal = action.journal;
            return { ...state };
        case 'clickMessage':
            state.showEyebox = action.showEyebox;
            return { ...state };
        default:
            return state;
    }
}

export const MyProvider = (props) => {
    const [state, dispatch] = useReducer(eyeReducer, {});
    const value = {
        state,
        dispatch
    };
    return (
        <myContext.Provider value={value}>
            {props.children}
        </myContext.Provider>
    )
}

import React, { useContext, useEffect, useState, useReducer } from 'react';
import { HeadmateReducer,  addheadmate, deleteheadmate, editheadmate, getheadmates } from '../../context/HeadmateContext'

import { Grid } from '@material-ui/core';
import GenericEntry from '../generic/genericEntry/GenericEntry'
import ReactDOM from 'react-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const Context = React.createContext()

// children is unrelated to context, dif feature in react
const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(HeadmateReducer, [
      {
        "id": 1,
        "age": "25",
        "name": "Maggie",
        "image": "https://i.pinimg.com/236x/35/7c/9e/357c9e6f9b84b147dc0316bc995dea57.jpg",
        "gender": "non-binary"
      }]);

    const boundActions = {}
    const actions = {addheadmate, deleteheadmate, editheadmate, getheadmates};

    for (let key in Object.keys(actions)) {
        boundActions[key] = actions[key]; //(dispatch)
    }

    return <Context.Provider value={{state, dispatch}}>
        {children}
    </Context.Provider>
}

function HeadmateListRender() {
    const {state, dispatch} = useContext(Context)

      useEffect(() => {
        getheadmates(dispatch)
      }, [])

      return <div> {state.map( (mate) => {
        return (
        <GenericEntry
        age= {mate.age}
        img= {mate.image}
        subText= {mate.gender}
        text={mate.name}
        />
        )
      })}
      </div>;
      
}

const HeadmateList = (props) => {
  return <Provider>
    <HeadmateListRender />
  </Provider>
}

export default HeadmateList;

// <Provider><HeadmateList /
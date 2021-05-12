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

    const [headmate, setHeadmate] = useState([
        {
          "id": 1,
          "age": "25",
          "name": "Maggie",
          "image": "https://i.pinimg.com/236x/35/7c/9e/357c9e6f9b84b147dc0316bc995dea57.jpg",
          "gender": "non-binary"
        },
        {
          "id": 2,
          "age": "19",
          "name": "Anna",
          "image": "https://i.pinimg.com/736x/6c/12/a8/6c12a8359754acb9f176c9155637c912.jpg",
          "gender": "female"
        },
        {
          "id": 3,
          "age": "3",
          "name": "Banana",
          "image": "https://media.istockphoto.com/vectors/boy-pointing-up-vector-id544811428?k=6&m=544811428&s=612x612&w=0&h=elOOMwPniPXpuq0eG3KjbNBjH40gTpSOYtBz_lPa_a0=",
          "gender": "male"
        },
        {
          "id": 4,
          "age": "3",
          "name": "Abdullah",
          "image": "https://media.istockphoto.com/vectors/boy-pointing-up-vector-id544811428?k=6&m=544811428&s=612x612&w=0&h=elOOMwPniPXpuq0eG3KjbNBjH40gTpSOYtBz_lPa_a0=",
          "gender": "male"
        }
      ])

    console.log("this is the state")
    
    const flexContainer = {
        display: 'flex',
        flexDirection: 'row',
        padding: 0,
      };
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
import React from 'react';
import EditJournal from './EditJournal';
import { MyProvider } from '../../reducer/eyeReducer';



export default {
  title: 'The Eye Pages/EditJournal',
  component: EditJournal,
};

export const editJournal = () => <MyProvider> <EditJournal /> </MyProvider> 
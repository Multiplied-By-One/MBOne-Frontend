import React from 'react';
import CreateEyeAcc from './CreateEyeAcc';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'The Eye Pages/CreateEyeAcc',
  component: CreateEyeAcc,
};

export const createForm = () => <BrowserRouter> <CreateEyeAcc /> </BrowserRouter> 


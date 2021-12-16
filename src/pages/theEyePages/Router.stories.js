import React from 'react';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';
import { MyProvider } from './reducer/eyeReducer';


export default {
  title: 'The Eye Pages/Router',
  component: Router,

};

export const router = () => <MyProvider> <BrowserRouter> <Router text="Welcome To The Eye"/> </BrowserRouter> </MyProvider>
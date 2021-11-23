import React from 'react';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'The Eye Pages/Router',
  component: Router,
};

export const router = () =>  <BrowserRouter> <Router /> </BrowserRouter>
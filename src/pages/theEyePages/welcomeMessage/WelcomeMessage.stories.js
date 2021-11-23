import React from 'react';
import WelcomeMassage from './WelcomeMessage';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'The Eye Pages/WelcomeMessage',
  component: WelcomeMassage,
};

export const welcomeMessage = () =>  <BrowserRouter> <WelcomeMassage /> </BrowserRouter>

import React from 'react';
import StoryRouter from 'storybook-react-router';
import WelcomeMassage from './WelcomeMessage';


export default {
  title: 'The Eye Pages/WelcomeMessage',
  component: WelcomeMassage,
  decorators: [StoryRouter()],
};

export const welcomeMessage = () => <WelcomeMassage /> 

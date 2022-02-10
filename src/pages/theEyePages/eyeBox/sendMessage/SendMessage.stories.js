import React from 'react';
import StoryRouter from 'storybook-react-router';
import SendMessage from './SendMessage';
import { MyProvider } from '../../reducer/eyeReducer';


export default {
  title: 'The Eye Pages/SendMessage',
  component: SendMessage,
  decorators: [StoryRouter()],

};

export const sendMessage = () => <MyProvider> <SendMessage /> </MyProvider>  
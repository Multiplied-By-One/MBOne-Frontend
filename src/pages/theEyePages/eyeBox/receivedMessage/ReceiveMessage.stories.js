import React from 'react';
import StoryRouter from 'storybook-react-router';
import ReceiveMessage from './ReceiveMessage';
import { MyProvider } from '../../reducer/eyeReducer';




export default {
  title: 'The Eye Pages/ReceiveMessage',
  component: ReceiveMessage,
  decorators: [StoryRouter()],

};

export const receiveMessage = () => <MyProvider> <ReceiveMessage /> </MyProvider>  
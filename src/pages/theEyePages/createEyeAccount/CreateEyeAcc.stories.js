import React from 'react';
import StoryRouter from 'storybook-react-router';
import CreateEyeAcc from './CreateEyeAcc';
import { MyProvider } from '../reducer/eyeReducer';



export default {
  title: 'The Eye Pages/CreateEyeAcc',
  component: CreateEyeAcc,
  decorators: [StoryRouter()],
};

export const createForm = () => <MyProvider> <CreateEyeAcc /> </MyProvider>


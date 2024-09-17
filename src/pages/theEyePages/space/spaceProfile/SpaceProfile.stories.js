import React from 'react';
import StoryRouter from 'storybook-react-router';
import SpaceProfile from './SpaceProfile';
import { MyProvider } from '../../reducer/eyeReducer';

export default {
  title: 'The Eye Pages/SpaceProfile',
  component: SpaceProfile,
  decorators: [StoryRouter()],

};

export const spaceProfile = () =>  <MyProvider> <SpaceProfile  />  </MyProvider> 


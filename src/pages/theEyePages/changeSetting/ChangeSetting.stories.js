import React from 'react';
import StoryRouter from 'storybook-react-router';
import ChangeSetting from './ChangeSetting';
import { MyProvider } from '../reducer/eyeReducer';


export default {
  title: 'The Eye Pages/ChangeSetting',
  component: ChangeSetting,
  decorators: [StoryRouter()],
};

export const changeSetting= () => <MyProvider> <ChangeSetting />  </MyProvider>
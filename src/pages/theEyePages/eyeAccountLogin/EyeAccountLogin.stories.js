import React from 'react';
import StoryRouter from 'storybook-react-router';
import EyeAcountLogin from './EyeAccountLogin';
import { MyProvider } from '../reducer/eyeReducer';


export default {
  title: 'The Eye Pages/EyeAcountLogin',
  component: EyeAcountLogin,
  decorators: [StoryRouter()],
};

const Template = (args) =>  <MyProvider> <EyeAcountLogin {...args}/> </MyProvider>;

export const eyeAcountLogin = Template.bind({});

eyeAcountLogin.args = {
    text: 'Maggie',
    subText: 'Maggie\'s Space',
}
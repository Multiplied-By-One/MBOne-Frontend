import React from 'react';
import StoryRouter from 'storybook-react-router';
import CreateJournal from './CreateJournal';
import { MyProvider } from '../../reducer/eyeReducer';



export default {
  title: 'The Eye Pages/CreateJournal',
  component: CreateJournal,
  decorators: [StoryRouter()],
};

const Template = (args) =>  <MyProvider> <CreateJournal {...args}/> </MyProvider>;

export const createJournal = Template.bind({});

createJournal.args = {
    headdding: "Maggie's Space",
}
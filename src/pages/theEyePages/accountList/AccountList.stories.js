import React from "react";
import StoryRouter from 'storybook-react-router';
import AccountList from './AccountList';
import { MyProvider } from "../reducer/eyeReducer";



export default {
    title: 'The Eye Pages/AccountList',
    component: AccountList,
    decorators: [StoryRouter()],
  };

const Template = (args) => <MyProvider> <AccountList {...args}/> </MyProvider> ;

export const accountList = Template.bind({});

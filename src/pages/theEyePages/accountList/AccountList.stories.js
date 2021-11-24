import React from "react";
import StoryRouter from 'storybook-react-router';
import AccountList from './AccountList';


export default {
    title: 'The Eye Pages/AccountList',
    component: AccountList,
    decorators: [StoryRouter()],
  };

const Template = (args) => <AccountList {...args}/> ;

export const accountList = Template.bind({});

accountList.args = {}
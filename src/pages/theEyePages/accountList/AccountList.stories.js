import React from "react";
import AccountList from './AccountList';
import { BrowserRouter } from "react-router-dom";

export default {
    title: 'The Eye Pages/AccountList',
    component: AccountList,
  };

const Template = (args) => <BrowserRouter> <AccountList {...args}/> </BrowserRouter>;

export const accountList = Template.bind({});

accountList.args = {}
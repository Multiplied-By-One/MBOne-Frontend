import React from "react";
import EyeBoxContactList from "./EyeBoxContactList";
import { ListItem } from "@material-ui/core";

export default {
    title: 'EyeBoxContactList',
    component: EyeBoxContactList,
  };
  
  const Template = (args) => <EyeBoxContactList {...args}/>;
  
  export const contactList = Template.bind({});
  
contactList.args = {
  subheader: 'Select Contact',
  listItems:
    ["Maggie", "Headmate 1", "Headmate 2"].map((item) => (
      <ListItem
        button
        style={{ justifyContent: 'center', borderBottom: "1px solid white" }}
      >
        {item}
      </ListItem>))
  }
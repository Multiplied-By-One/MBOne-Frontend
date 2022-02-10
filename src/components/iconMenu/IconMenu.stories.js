import React from "react";
import IconMenu from "./IconMenu";

export default {
  title: 'IconMenu',
  component: IconMenu,
};

const Template = (args) => <IconMenu {...args} />;

export const iconMenu = Template.bind({});

iconMenu.args = {
  options: [
    'Upload File',
    'Upload Image',
    'Add Bullet Point',
    'Insert Link',
    'Cancel'
  ],
  clickedOption: (option) => { console.log(option) }
}

        // 'Upload File',
        // 'Upload Image',
        // 'Insert Line Separator',
        // 'Insert Timestamp',
        // 'Add Bullet Point',
        // 'Hangouts Call',
        // 'Insert Link',
        // 'Change Entry Date',
        // 'Download Entry',
        // 'Delete Entry'
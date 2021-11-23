import React from "react";
import Tooltips from "./Tooltips";
import AddIcon from '@material-ui/icons/Add'

export default {
    component : Tooltips,
    title : "Tooltips",
}

const Template = (args) => <Tooltips {...args}/>;

export const tooltips = Template.bind({})

tooltips.args = {
    title: "Add an Eye account ",
    icon: <AddIcon/>


}
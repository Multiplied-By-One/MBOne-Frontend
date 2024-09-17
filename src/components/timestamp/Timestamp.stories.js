import React from "react";
import Timestamp from "./Timestamp";

export default {
    component: Timestamp,
    title: "Timestamp",
}

const Template = (args) => <Timestamp {...args} onClick={console.log("Tclicked")} />;

export const timestamp = Template.bind({})

timestamp.args = {
    date: "March 2",
    year: 2020,
    title: "Entry Title "
}
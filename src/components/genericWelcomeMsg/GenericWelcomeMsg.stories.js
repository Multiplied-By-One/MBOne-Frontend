import React from 'react'
import GenericWelcomeMassage from './GenericWelcomeMsg'

export default{
    title: 'GenericWelcomeMassage',
    component: GenericWelcomeMassage,
}

const Template = (args) => <GenericWelcomeMassage {...args}/> ;

export const MultipliedByOne = Template.bind({});
export const TheEye = Template.bind({});


MultipliedByOne.args = {
    heading: 'Welcome!',
    bodys: ['In order to use most of the features, the fist thing you will need to do is add your basic profiles to the System Map. The only required field is the name. Each name entered needs to be different from each other by at least one character so as to identify all Headmates within features that are linked from your System Map profile.', 
    'The next time you sign in, you’ll be brought right to your features page.', 
    'Click “Okay” to continue.'],
}

TheEye.args ={
    heading : 'Welcome to The Eye',
    bodys: ['Every Headmate can have their own account within The Eye that is customized with their own  themes and fonts.',
    'What is The Eye? It\'s an account for an individual Headmate where everything in it is their own and can be password protected. Multiple personal journals can be added to each Eye account, and it\'s where each Eye Box is accessed.',
    'The Eye Box is for private messaging between specific Headmates.',
    'Click the + symbol to add an Eye account.',
    'In order to use this feature, you will first need to add your basic profile to the System Map.This is where your names will be linked from.',
    'Click "Okay" to start.If you want to see this message again later, see the Guide in the sidebar.']
}





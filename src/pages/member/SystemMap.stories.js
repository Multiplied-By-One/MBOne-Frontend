import React from 'react';
import HeadmateList from '../../components/system-map/HeadmateList'
import HeadmateForm from '../../components/system-map/HeadmateForm'
import SystemMap from './SystemMap';

export default {
  title: 'SystemMap',
  component: SystemMap,
};

// export const form = () => (
//  <HeadmateList />
// )

const Template = (args) => <SystemMap {...args}/>;

export const form = Template.bind({});
export const list = Template.bind({});

list.args = {
  display: <HeadmateList />
};

form.args = {
  display: <HeadmateForm />
}
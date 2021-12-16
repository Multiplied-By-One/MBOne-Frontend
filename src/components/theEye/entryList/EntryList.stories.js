import StoryRouter from 'storybook-react-router';
import EntryList from './EntryList';
import { MyProvider } from '../../../pages/theEyePages/reducer/eyeReducer';


export default {
    title: 'The Eye Component/EntryList',
    component: EntryList,
    decorators: [StoryRouter()],
};

const Template = (args) => <MyProvider> <EntryList {...args} /> </MyProvider>;

export const entryList = Template.bind({});

entryList.args = {
    data: [
        { content: "This is my first entry", date: "May 25", id: 1000, journalId: 100, title: "Entry Title 1 sbhet", year: 2020 },
        { content: "This is my second entry", date: "May 25", id: 1001, journalId: 100, title: "Entry Title 2 dbvjeuie", year: 2020 }
    ]
}
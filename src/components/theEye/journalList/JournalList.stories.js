import StoryRouter from 'storybook-react-router';
import JournalList from './JournalList';
import { MyProvider } from '../../../pages/theEyePages/reducer/eyeReducer';



export default {
  title: 'The Eye Component/JournalList',
  component: JournalList,
  decorators: [StoryRouter()],
};

const Template = (args) => <MyProvider> <JournalList {...args} /> </MyProvider>;

export const journalList = Template.bind({});
import StoryRouter from 'storybook-react-router';
import AccountListComponent from './AccountListComp';
import { MyProvider } from '../../../pages/theEyePages/reducer/eyeReducer';



export default {
  title: 'The Eye Component/AccountListComponent',
  component: AccountListComponent,
  decorators: [StoryRouter()],
};

const Template = (args) => <MyProvider> <AccountListComponent {...args}/> </MyProvider> ;

export const accountListComp = Template.bind({});

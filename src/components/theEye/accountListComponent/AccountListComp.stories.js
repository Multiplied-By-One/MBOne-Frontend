import StoryRouter from 'storybook-react-router';
import AccountListComponent from './AccountListComp';



export default {
  title: 'The Eye Component/AccountListComponent',
  component: AccountListComponent,
  decorators: [StoryRouter()],
};

const Template = (args) => <AccountListComponent {...args}/> ;

export const accountListComp = Template.bind({});

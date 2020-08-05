import { hbs } from 'ember-cli-htmlbars';
import GreetingComponent from '../app/components/greeting';

export default {
  title: 'welcome-banner',
  component: GreetingComponent,
  parameters: {
    docs: {
      iframeHeight: 200,
    },
  },
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  //   subTitleColor: { control: 'color' },
  // },
};

export const Basic = (args) => ({
  template: hbs`
      <Greeting @givenName={{this.givenName}} @familyName={{this.familyName}}/>
    `,
  context: args,
});
// Basic.args = {
//   backgroundColor: '#FDF4E7',
//   titleColor: '#DF4D37',
//   subTitleColor: '#B8854F',
//   title: 'Welcome to storybook',
//   subtitle: 'This environment is completely editable',
//   onClick: action('clicked'),
// };

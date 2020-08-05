import Component from '@glimmer/component';

export interface GreetingArgs {
  givenName: string;
  familyName: string;
}

export default class GreetingComponent extends Component<GreetingArgs> { }
import Component from '@glimmer/component';

export default class GreetingComponent extends Component {
  get name() {
    return `${this.args.givenName} ${this.args.familyName}`;
  }
}

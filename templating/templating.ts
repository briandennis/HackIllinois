import {Component} from 'angular2/core';
import {secondComponent} from './secondComponent';

@Component({
  selector: 'my-app',
  template: `<h1>My Component </h1>
             <h2>{{numUsers}}</h2>
             <second-component></second-component>
             `,
  directives: [secondComponent]
})
export class myApp {

  numUsers: number = 72;

}

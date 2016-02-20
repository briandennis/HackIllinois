import {Component} from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `<h1>My Component </h1>
             <h2>{{numUsers}}</h2>`
})
export class myApp {

  numUsers: number = 72;

}

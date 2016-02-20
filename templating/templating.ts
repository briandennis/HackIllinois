import {Component} from 'angular2/core';
import {secondComponent} from './secondComponent';

@Component({
  selector: 'my-app',
  template: `<h1 [textContent]='getName()'></h1>
             <h2>{{numUsers}}</h2>
             <second-component></second-component>
             <button (click)='buttonClicked()'>Click me!</button>
             `,
  directives: [secondComponent]
})
export class myApp {

  numUsers: number = 72;

  getName (){
    return 'Brian';
  }

  buttonClicked(){
    alert('Way to follow directions!');
  }

}

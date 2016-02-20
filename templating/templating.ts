import {Component} from 'angular2/core';
import {secondComponent} from './secondComponent';
import {peopleComponent} from './peopleComponent';

@Component({
  selector: 'my-app',
  template: `<h1 [textContent]='getName()'></h1>
             <h2>{{numUsers}}</h2>
             <second-component></second-component>
             <button (click)='buttonClicked()'>Click me!</button>
             <input type="text" #name>
             <button (click)="name.focus()">Focus the input</button>
             <people-component></people-component>
             `,
  directives: [secondComponent, peopleComponent]
})
export class myApp {

  numUsers: number = 0;

  getName (){
    return 'Brian';
  }

  buttonClicked(){
    this.numUsers++;
  }

}

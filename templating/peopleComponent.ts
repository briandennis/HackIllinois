import {Component} from 'angular2/core';

@Component({
  selector: 'people-component',
  template: `

    <div>
      <h3 *ngFor='#person of people'> {{person}}</h3>
    </div>

  `
})
export class peopleComponent{
  people: Array<any> = ['Brian', 'Mike', 'Xiao', 'Jake'];
}

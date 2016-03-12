import {Component} from 'angular2/core';

@Component({
  selector: 'na-header',
  template:  `
    <div id='headerWrapper'>
      <div id='titleWrapper'>
        <h1> Note<span style='color:blue'>App</span> </h1>
      </div>
      <div id='headerButtons'>
        <div class='buttonWrapper'>
          <button>Add Note </button>
        </div>
        <div class='buttonWrapper'>
          <button>Delete Notes</button>
        </div>
      </div>
    </div>
  `
})
export class Header{
  createNote: (text: string) => void;
}

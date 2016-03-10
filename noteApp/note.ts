import {Component} from 'angular2/core';

@Component({
  selector: 'na-note',
  template: `
    <div class='note'>
      <p class='noteText'>
      {{text}}
      </p>
      <div class='noteButtons'>
        <button (click)='updateText()' class='changeText'><i class='fa fa-pencil'></i></button>
        <button class='deleteNode'><i class='fa fa-trash'></i></button>
      </div>
    </div>
  `,
})
export class Note{

  text: string;

  constructor(noteText: string){
    this.text = noteText;
  }

  updateText(){
    this.text = window.prompt('Note: ');
  }
}

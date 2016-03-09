import {Component} from 'angular2/core';
import {Note} from './note';

export class NoteService {

  notes:Note[];

  constructor(notes:Note[] ){
    this.notes = notes;
  }

  getNotes(){
    return this.notes;
  }
}

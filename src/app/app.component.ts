import { Component } from '@angular/core';

const notes = ['C4','D4','E4','F4','G4','A4','B4','C5','D5','E5','F5','G5']

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    note='G5'
    visible = false;

    getRandomNote = () => {
      return notes[Math.floor(Math.random() * Math.floor(notes.length))]
    }

    nextNote = () => {
      this.note = this.getRandomNote()
      log(this.note)
    }

    show = () => {
      this.visible = !this.visible
    }
}
export function log(item){
  console.log(item)
}
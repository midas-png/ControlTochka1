import { Component } from '@angular/core';
import { Users } from './table/table.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: Users[] =  [
    {id: 1, name: 'John Cage', age: 19},
    {id: 2, name: 'Noob Sybott', age: 43},
    {id: 3, name: 'Sub Zero', age: 190},
    {id: 4, name: 'Scorpion From Hell', age: 190},
  ]
}

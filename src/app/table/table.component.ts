import { Component, Input } from '@angular/core';

export interface Users { // Так удобнее, за интерфейс не бейте)
  id: number;
  name: string;
  age: number;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  @Input()
  users: Users[] = [];

  deleteUser(id: number, index: number){
    this.users.splice(index, 1)
  }
}

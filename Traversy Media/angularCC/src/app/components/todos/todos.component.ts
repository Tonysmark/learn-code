import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todos';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.less']
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  constructor() {}

  ngOnInit() {
    this.todos = [
      {
        id: 1,
        title: '吃早饭',
        completed: false
      },
      {
        id: 2,
        title: '吃午饭',
        completed: true
      },
      {
        id: 3,
        title: '吃晚饭',
        completed: false
      }
    ];
  }
}

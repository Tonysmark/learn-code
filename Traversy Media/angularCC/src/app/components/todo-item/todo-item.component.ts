import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todos';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.less']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  constructor() {}
  ngOnInit() {}
  setClasses() {
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    };
    return classes;
  }
}

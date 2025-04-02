import { CommonModule } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-add-todo',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent implements OnInit {

  id!: number;
  title!: string;
  description!: string;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  constructor() {
    this.id = 0;
  }
  ngOnInit() {}

  onSubmit() {
    const todo: Todo = {
      id: this.id,
      title: this.title,
      description: this.description,
      active: true
    }
    this.id++;
    this.todoAdd.emit(todo)
  }

}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../../Todo';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { AddTodoComponent } from "../add-todo/add-todo.component";

@Component({
  selector: 'app-todos',
  imports: [CommonModule, TodoItemComponent, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  localTodos!: string | null;

  constructor() {
    this.todos = [
      // {
      //   id: 1,
      //   title: 'Todo 1',
      //   description: 'Description 1',
      //   active: true
      // },
      // {
      //   id: 2,
      //   title: 'Todo 2',
      //   description: 'Description 2',
      //   active: true
      // },
      // {
      //   id: 3,
      //   title: 'Todo 3',
      //   description: 'Description 3',
      //   active: false
      // }
    ]

    if (typeof window !== 'undefined') { // Check if running in the browser
      this.localTodos = localStorage.getItem('todos');
      if (this.localTodos != null) {
        this.todos = JSON.parse(this.localTodos);
      }
      else {
        
      }
    }
  }

  ngOnInit(): void {
  
  }

  deleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    console.log(this.todos.splice(index, 1));
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    console.log(this.todos);
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

}

import { Component, OnInit }                   from '@angular/core';
import { Todo }                                from "../../interfaces/todo";
import { animate, style, transition, trigger } from "@angular/animations";

@Component(
  {
    selector:    'todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls:   ['./todo-list.component.scss'],
    animations:  [
      trigger('fade', [
        transition(':enter', [
          style({opacity: 0, transform: 'translateY(30px)'}),
          animate(200, style({opacity: 1, transform: 'translateY(0px)'}))
        ]),
        transition(':leave', [
          animate(200, style({opacity: 0, transform: 'translateY(30px)'}))
        ]),
      ])
    ]
  }
)
export class TodoListComponent implements OnInit {
  todos: Todo[];
  todoTitle: string;
  idForTodo: number;
  beforeEditcache: string;
  filter: string;

  constructor() {
  }

  ngOnInit(): void {
    this.filter          = 'all';
    this.todoTitle       = '';
    this.idForTodo       = 4;
    this.beforeEditcache = '';
    this.todos           = [
      {
        id:        1,
        title:     'Todo Number 1',
        completed: false,
        editing:   false,
      },
      {
        id:        2,
        title:     'Todo Number 2',
        completed: true,
        editing:   false,
      },
      {
        id:        3,
        title:     'Todo Number 3',
        completed: false,
        editing:   false,
      }
    ];
  }

  addTodo(): void {
    if (this.todoTitle.trim().length === 0) {
      return;
    }

    this.todos.push(
      {
        id:        this.idForTodo,
        title:     this.todoTitle,
        completed: false,
        editing:   false,
      }
    );

    this.todoTitle = '';
    this.idForTodo++;
  }

  deleteToDo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  editTodo(todo: Todo): void {
    this.beforeEditcache = todo.title;
    todo.editing         = true;
  }

  doneEditing(todo: Todo): void {
    if (todo.title.trim().length === 0) {
      todo.title = this.beforeEditcache;
    }

    todo.editing = false;
  }

  cancelEdit(todo: Todo): void {
    todo.title   = this.beforeEditcache;
    todo.editing = false;
  }

  remaining(): number {
    return this.todos.filter(todo => !todo.completed).length;
  }

  atLeastOneCompleted(): boolean {
    return this.todos.filter(todo => todo.completed).length > 0;
  }

  clearCompleted(): void {
    this.todos = this.todos.filter(todo => !todo.completed);
  }

  checkAllTodos(): void {
    this.todos.forEach(todo => todo.completed = (<HTMLInputElement>event.target).checked)
  }

  todoFilter(): Todo[] {
    switch (this.filter) {
      default:
      case 'all':
        return this.todos
      case 'active':
        return this.todos.filter(todo => !todo.completed);
      case 'completed':
        return this.todos.filter(todo => todo.completed);
    }
  }
}

import { observable, action, computed, makeObservable } from 'mobx';
import { v4 as uuidv4 } from 'uuid';

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export class TodoStore {
  todos: Todo[] = [
    { id: uuidv4(), title: '양치하기', completed: true },
    { id: uuidv4(), title: '운동하기', completed: false },
  ];

  constructor() {
    makeObservable(this, {
      todos: observable,
      addTodo: action,
      removeTodo: action,
      toggleTodo: action,
      info: computed,
    });
  }

  addTodo = (todo: Todo) => {
    this.todos.push({ ...todo, id: uuidv4() });
  };

  removeTodo = (id: string) => {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  };

  toggleTodo = (id: string) => {
    this.todos = this.todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
  };

  get info() {
    return {
      total: this.todos.length,
      completed: this.todos.filter((todo) => todo.completed).length,
      notCompleted: this.todos.filter((todo) => !todo.completed).length,
    };
  }
}

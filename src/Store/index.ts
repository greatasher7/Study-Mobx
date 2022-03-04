import { createContext, useContext } from 'react';
import { TodoStore } from './TodoStore';
import { UserStore } from './UserStore';
import { AsyncTrunk } from 'mobx-sync';

export class RootStore {
  todoStore: TodoStore;
  userStore: UserStore;

  constructor() {
    this.todoStore = new TodoStore();
    this.userStore = new UserStore();
  }
}

export const rootStore = new RootStore();

export const trunk = new AsyncTrunk(rootStore, {
  storage: sessionStorage,
});

export const StoreContext = createContext(rootStore);

export const StoreProvider = StoreContext.Provider;
export const useStore = () => useContext(StoreContext);

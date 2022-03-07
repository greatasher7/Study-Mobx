import { observable, makeObservable } from 'mobx';
import { v4 as uuidv4 } from 'uuid';

export interface IUser {
  id: string;
  name: string;
  age: number;
}

export class UserStore {
  constructor() {
    makeObservable(this, {
      user: observable,
    });
  }

  user: IUser = { id: uuidv4(), name: 'John', age: 22 };
}

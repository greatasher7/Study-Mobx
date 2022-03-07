import { observable, action, makeObservable, runInAction } from 'mobx';
import { getData } from '../Pages/Asynchronous/Asynchronous';

export interface IEmployee {
  employee_age: number;
  employee_name: string;
  employee_salary: number;
  id: number;
  profile_image: string;
}

export class EmployeeStore {
  employees: IEmployee[] = [];

  constructor() {
    makeObservable(this, {
      employees: observable,
      getEmployees: action,
    });
  }

  getEmployees = async () => {
    try {
      const res = await getData();
      console.log(typeof res);
      runInAction(() => {
        this.employees = res.data.data;
      });
    } catch (e) {
      console.log('error!!', e);
    }
  };
}

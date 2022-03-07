import React, { useEffect } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import axios from 'axios';
import { useStore } from '../../Store';

export const getData = () =>
  axios({
    method: 'GET',
    url: 'http://dummy.restapiexample.com/api/v1/employees',
  });

const Asynchronous = () => {
  const { employeeStore } = useStore();

  useEffect(() => {
    employeeStore.getEmployees();
  }, []);

  return (
    <Container>
      <Center>
        <ul className="list">
          {employeeStore.employees.map((employee) => (
            <List key={employee.id}>
              <h4>{employee.employee_name}</h4>
              <span className="age">{employee.employee_age}</span>
            </List>
          ))}
        </ul>
      </Center>
    </Container>
  );
};

export default observer(Asynchronous);

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Center = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  .list {
    width: 100%;
    display: grid;
    grid-row-gap: 10px;
  }
`;

const List = styled.li`
  border: 1px solid #333;
  border-radius: 10px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  .age {
    cursor: pointer;
  }
`;

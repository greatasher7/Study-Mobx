import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react';
import AddToDo from '../../Components/AddToDo';
import { useStore } from '../../Store';

const Home = () => {
  const { todoStore } = useStore();

  const handleRemove = (id: string) => {
    todoStore.removeTodo(id);
  };

  const handleToggle = (id: string) => {
    todoStore.toggleTodo(id);
  };

  return (
    <Container>
      <Center>
        <AddToDo />
        <ul className="list">
          {todoStore.todos.map((todo) => (
            <TodoList isCompleted={todo.completed} key={todo.id}>
              <h4>
                <span
                  className="removeBtn"
                  onClick={() => {
                    handleRemove(todo.id);
                  }}
                >
                  X
                </span>
                {todo.title}
              </h4>
              <span
                className="isCompleted"
                onClick={() => {
                  handleToggle(todo.id);
                }}
              >
                {todo.completed ? 'Complete!' : 'Not yet'}
              </span>
            </TodoList>
          ))}
        </ul>
      </Center>
    </Container>
  );
};

export default observer(Home);

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

const TodoList = styled.li<{ isCompleted: boolean }>`
  border: 1px solid #333;
  border-radius: 10px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  .isCompleted {
    color: ${(props) => (props.isCompleted ? 'blue' : 'red')};
    cursor: pointer;
  }
  .removeBtn {
    margin-right: 15px;
    &:hover {
      opacity: 0.3;
      cursor: pointer;
    }
  }
`;

import React, { useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { useStore } from '../Store';

const AddToDo = () => {
  const [value, setValue] = useState('');
  const { todoStore } = useStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    todoStore.addTodo({
      id: uuidv4(),
      title: value,
      completed: false,
    });
  };

  return (
    <Container>
      <input type="text" value={value} onChange={handleChange} />
      <button onClick={handleSubmit}>add</button>
    </Container>
  );
};

export default AddToDo;

const Container = styled.div`
  margin-bottom: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  input,
  button {
    height: 100%;
  }
  input {
    width: 70%;
  }
  button {
    width: 20%;
  }
`;

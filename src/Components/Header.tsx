import React from 'react';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useStore } from '../Store';

const Header = () => {
  const { userStore } = useStore();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    if (pathname === '/') {
      navigate('/asynchronous');
    } else {
      navigate('/');
    }
  };

  return (
    <Container>
      <h1 onClick={handleClick}>{pathname === '/' ? 'Move to Async' : 'Move to Todolist'}</h1>
      <span>
        {userStore.user.name} / {userStore.user.age}
      </span>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  height: 70px;
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
  background-color: #fdfdbe;
  h1 {
    cursor: pointer;
  }
`;

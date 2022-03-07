import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Asynchronous from './Asynchronous/Asynchronous';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/asynchronous" element={<Asynchronous />} />
    </Routes>
  );
};

export default RoutesComponent;

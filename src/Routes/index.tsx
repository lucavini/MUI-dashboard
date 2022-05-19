import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Components
import Home from '../pages/Home';

import { Container } from './styles';

function Router() {
  return (
    <Container>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Container>
  );
}

export default Router;

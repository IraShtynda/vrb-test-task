import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import { Header } from './components/Header';

export const App: React.FC = () => {

  return (
    <>
      <Header />
      <Container sx={{ marginBlock: '120px', marginInline: 'auto' }}>
        <Outlet />
      </Container>
    </>
  );
};


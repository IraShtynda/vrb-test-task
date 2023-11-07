import React from 'react';
import { Container, Typography } from '@mui/material';

export const NotFoundPage: React.FC = () => {
  return (
    <Container sx={{marginBlock: '120px', marginInline: 'auto'}}>
      <Typography variant="h1" color='secondary' sx={{fontSize: '120px', textAlign: 'center'}}>
        404
      </Typography>
      <Typography variant="h4" sx={{textAlign: 'center'}}>
        Oops!<br/>That page you&apos;re looking can&apos;t be found.
      </Typography>
    </Container>
  );
};
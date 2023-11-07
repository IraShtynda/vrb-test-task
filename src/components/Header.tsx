import React from 'react';
import { Container, AppBar } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Colors } from '../styles/theme';

export const NavItem = styled(NavLink)(() => ({
  textDecoration: 'none',
  padding: '5px',
  margin: '10px 20px',
  fontWeight: 700,
  fontSize: '18px',
  color: Colors.light,
  ': hover': {
    color: Colors.accent
  },
  '&.active': {
    color: Colors.accent,
    borderBottom: `2px solid ${Colors.accent}`
  }
}));

export const Header: React.FC = () => {
  return (<AppBar sx={{ paddingBlock: '10px' }}>
    <Container maxWidth='xs' sx={{display: 'flex', justifyContent: 'center'}}>
      <NavItem to="/">UserArticles</NavItem>
      <NavItem to="/news">News</NavItem>
    </Container>
  </AppBar>
  );
};
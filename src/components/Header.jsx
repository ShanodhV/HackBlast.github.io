import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.secondary};
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;

  h1 {
    margin: 0;
    font-size: 1.5rem;
  }

  div {
    display: flex;
    gap: 1rem;
  }

  a {
    color: ${props => props.theme.colors.secondary};
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: background 0.3s;

    &:hover {
      background: ${props => props.theme.colors.accent};
      color: ${props => props.theme.colors.primary};
    }
  }
`;

const Header = () => (
  <NavBar>
    <h1>HackBlast 1.0</h1>
    <div>
      <Link to="home" smooth duration={1000}>Home</Link>
      <Link to="register" smooth duration={1000}>Register</Link>
      <Link to="about" smooth duration={1000}>About</Link>
      <Link to="contact" smooth duration={1000}>Contact</Link>
    </div>
  </NavBar>
);

export default Header;

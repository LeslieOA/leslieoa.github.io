import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      {/*
      <li>
        <a href="https://twitter.com/LeslieOA">Twitter</a>
      </li>
      <li>
        <a href="https://github.com/LeslieOA">GitHub</a>
      </li>
      */}
    </ul>
  </Container>
);

export default Nav;

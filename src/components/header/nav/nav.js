import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li className="media-query media-phone">
        <Link to="/">Home</Link>
      </li>
      <li className="media-query media-phone">
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </Container>
);

export default Nav;

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const MenuNav = styled(motion.nav)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: var(--black);
  padding: 40px;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    padding: 0;
    margin: 0;
    font-size: 2rem;
    margin-bottom: 10px;
    a {
      color: white;
    }
  }
`;

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: '-100%' },
}

const Nav = ({ isOpen, onCloseClick }) => {
  return (
    <MenuNav
      variants={variants}
      initial="closed"
      animate={isOpen ? 'open' : 'closed'}
      transition={{
        ease: 'easeInOut',
        duration: 1,
      }}
    >
      <button onClick={onCloseClick}>Close</button>
      <ul>
        <li><a href="#">One</a></li>
        <li><a href="#">Two</a></li>
        <li><a href="#">Three</a></li>
        <li><a href="#">Four</a></li>
      </ul>
    </MenuNav>
  );
}

export default Nav;
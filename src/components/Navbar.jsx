import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BiMenuAltRight } from 'react-icons/bi';
import { IconContext } from 'react-icons';
import test from '../assets/test-blob.svg';
import logo from '../assets/images/Omion-04.png';
import { useState } from 'react';
import Menu from './shared/menu/Menu';

import React from 'react';

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  position: relative;
  .navlink {
    color: rgba(214, 212, 142, 1);
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    display: none;
  }
  img {
    width: 120px;
    position: relative;
    z-index: 1;
  }

  .logo {
    position: relative;
  }

  .blob {
    position: absolute;
    top: -280px;
    left: -150px;
    img {
      width: 380px;
    }
  }

  .menu {
    cursor: pointer;
  }

  @media (min-width: 765px) {
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
    gap: 5rem;

    .navlink {
      display: block;
      font-size: clamp(0.96rem, calc(0.87rem + 0.37vw), 1.2rem);

      &:hover {
      }
    }

    .menu {
      display: none;
    }
    .blob {
      top: -250px;
      left: -120px;
    }
  }
`;

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleClick = () => {
    setMenu(!menu);
  };

  const hideMenu = () => {
    setMenu(false);
  };
  const MoMenu = motion(Menu, { forwardMotionProps: true });

  return (
    <IconContext.Provider
      value={{
        color: '#d6d58e',
        className: 'global-class-name',
        size: '2.5rem',
      }}
    >
      <Wrapper>
        <Link to='/' className='navlink'>
          Home
        </Link>
        <Link to='/about' className='navlink'>
          About Me
        </Link>

        <div className='logo'>
          <motion.div
            className='blob'
            animate={{ rotate: 360 }}
            transition={{
              type: 'tween',
              duration: 15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <img src={test} alt='' />
          </motion.div>
          <img src={logo} alt='Omion Tech logo' />
        </div>
        <motion.div
          className='menu'
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.1 },
          }}
          whileTap={{
            scale: 0.8,
          }}
          onClick={() => handleClick()}
        >
          <BiMenuAltRight />
        </motion.div>
        <Link to='/projects' className='navlink'>
          Projects
        </Link>
        <Link to='/contact' className='navlink' onClick={hideMenu}>
          Contact
        </Link>

        <AnimatePresence>
          {menu && (
            <MoMenu
              transition={{
                type: 'spring',
                damping: 12,
                duration: 0.2,
                stiffness: 150,
              }}
              animate={{ y: 250 }}
              initial={{ y: -200 }}
              exit={{ scale: [1.2, 1, 0] }}
              hideMenu={hideMenu}
            />
          )}
        </AnimatePresence>
      </Wrapper>
    </IconContext.Provider>
  );
};
export default Navbar;

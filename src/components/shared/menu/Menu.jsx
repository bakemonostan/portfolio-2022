// import { AnimatePresence, motion } from 'framer-motion';
import './Menu.css';
import { Link } from 'react-router-dom';
import React from 'react';

const FancyLink = React.forwardRef(({ navigate, ...props }, ref) => {
  return (
    <a ref={ref} {...props}>
      {props.children}
    </a>
  );
});

const Menu = React.forwardRef(({ hideMenu }, ref) => {
  return (
    <div ref={ref} className='nav-list'>
      <Link to='/' component={FancyLink} onClick={hideMenu}>
        Home
      </Link>
      <Link to='/about' component={FancyLink} onClick={hideMenu}>
        About
      </Link>
      <Link to='/projects' component={FancyLink} onClick={hideMenu}>
        Projects
      </Link>
      <Link to='/contact' component={FancyLink} onClick={hideMenu}>
        Contact
      </Link>
    </div>
  );
});
export default Menu;

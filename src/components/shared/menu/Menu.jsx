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

const Menu = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className='nav-list'>
      <Link to='/contact' component={FancyLink}>
        Contact
      </Link>
      <Link to='/contact' component={FancyLink}>
        Contact
      </Link>
      <Link to='/contact' component={FancyLink}>
        Contact
      </Link>
      <Link to='/contact' component={FancyLink}>
        Contact
      </Link>
      <Link to='/contact' component={FancyLink}>
        Contact
      </Link>
    </div>
  );
});
export default Menu;

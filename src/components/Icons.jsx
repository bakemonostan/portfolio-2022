// import test from '../assets/test-blob.svg';
import { motion } from 'framer-motion';
import { IconContext } from 'react-icons';
import styled from 'styled-components';
import { BsGithub, BsLinkedin, BsTwitter, BsInstagram } from 'react-icons/bs';
const Wrapper = styled.div`
  padding-top: 2rem;
`;

const Icons = ({ children }) => {
  return (
    <Wrapper>
      <IconContext.Provider
        value={{
          color: '#d6d58e',
          className: 'global-class-name',
          size: '1.8rem',
        }}
      >
        <motion.div
          className='icon'
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.1 },
          }}
          whileTap={{
            scale: 0.5,
          }}
        >
          <a href='#'>{children}</a>
        </motion.div>
      </IconContext.Provider>
    </Wrapper>
  );
};
export default Icons;

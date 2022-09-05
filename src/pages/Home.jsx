import styled from 'styled-components';
import Icons from '../components/Icons';
import { motion } from 'framer-motion';
import { BsGithub, BsLinkedin, BsTwitter, BsInstagram } from 'react-icons/bs';

export const Wrapper = styled.div`
  padding: 8rem 0;
  color: #d6d58e;
  text-align: center;
  margin: 0 auto;
  max-width: 420px;
  display: grid;
  justify-content: center;
  align-content: center;

  span {
    color: rgba(219, 242, 38, 1);
    font-weight: bold;
  }

  h1 {
    font-size: clamp(2.08rem, calc(1.6rem + 2.07vw), 3.2rem);
  }

  p {
    padding: 0 0.5rem;
    font-size: clamp(0.97rem, calc(0.65rem + 0.91vw), 1.36rem);
  }

  .icons {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
  }

  @media (min-width: 835px) {
    max-width: 750px;

    span {
      color: rgba(219, 242, 38, 1);
    }
    .icons {
      gap: 2.5rem;
    }
  }
`;

const Home = () => {
  return (
    <Wrapper>
      <motion.div
        className='info'
        transition={{ delay: 0.3 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        <h1>
          Hi, I'm <span>Ehis</span> Omokhomion
        </h1>
        <br />
        <p>
          A<span> front-End Web developer </span>specializied in building
          exceptional and scalable digital experience, focused on building
          front-end web applications while currently learning back-end
          technologies.
        </p>
      </motion.div>
      <motion.div
        className='icons'
        transition={{ delay: 0.6 }}
        initial={{ x: -1300 }}
        animate={{ x: 0 }}
      >
        <Icons>
          <a
            href='https://github.com/bakemonostan'
            target='_blank'
            rel='noreferrer'
          >
            <BsGithub />
          </a>
        </Icons>
        <Icons>
          <a
            href='https://www.linkedin.com/in/omokhomionehis/'
            target='_blank'
            rel='noreferrer'
          >
            <BsLinkedin />
          </a>
        </Icons>
        <Icons>
          <a
            href='https://twitter.com/BakemonoStan'
            target='_blank'
            rel='noreferrer'
          >
            <BsTwitter />
          </a>
        </Icons>
        <Icons>
          <a
            href='https://www.instagram.com/bakemono_stan/'
            target='_blank'
            rel='noreferrer'
          >
            <BsInstagram />
          </a>
        </Icons>
      </motion.div>
    </Wrapper>
  );
};

export default Home;

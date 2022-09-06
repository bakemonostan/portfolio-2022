import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled.div`
  background: rgba(0, 91, 82, 1);
  border-radius: 15px;
  padding-bottom: 0.5rem;
  max-width: 350px;
  margin-inline: auto;

  figure {
    position: relative;
    overflow: hidden;
    img {
      border-radius: 10px 10px 0 0;
      aspect-ratio: 1/1;
      object-fit: cover;
      width: 100%;
    }
    figcaption {
      position: absolute;
      top: 88%;
      height: 99.3%;
      border-radius: 10px 10px 0 0;
      transition: all 0.3s;

      &:hover {
        background-color: rgba(0, 91, 82, 0.4);
        opacity: 1;
        top: 0;
      }

      p,
      h2 {
        color: black;
        font-weight: bold;
      }
    }
  }
  .split {
  }

  .links {
    padding: 1rem 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 0.5rem;
  }

  .links button {
    padding: 0.5rem;
    border-radius: 10px;
    background: rgba(219, 242, 38, 1);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border: none;
    a {
      color: rgba(4, 40, 63, 1);
      font-weight: bold;
      font-size: 1rem;
    }
  }

  @media (min-width: 1025px) {
  }
`;
const Card = ({ preview, github, img, desc, title }) => {
  return (
    <Wrapper>
      <div className='split'>
        <figure>
          <img src={img} alt='project preview' />
          <figcaption>
            <h2>{title}</h2>
            <p>{desc}</p>
          </figcaption>
        </figure>
      </div>
      <div className='links'>
        <motion.button
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.1 },
          }}
          whileTap={{
            scale: 0.5,
          }}
        >
          <a href={preview} target='_blank' rel='noreferrer'>
            Live Preview
          </a>
        </motion.button>
        <motion.button>
          <a href={github} target='_blank' rel='noreferrer'>
            Github Repo
          </a>
        </motion.button>
      </div>
    </Wrapper>
  );
};
export default Card;

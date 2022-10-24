import styled from 'styled-components';
import { motion } from 'framer-motion';
import placeholder from '../../assets/images/placeholder-300x202.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

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
      opacity: 0;
      top: 0;
      height: 99.3%;
      border-radius: 10px 10px 0 0;
      transition: all 0.3s;

      &:hover {
        background-color: rgba(0, 91, 82, 0.8);
        opacity: 1;
      }

      p,
      h2 {
        color: #d6d58e;
        font-weight: bold;
      }
      h2 {
        padding-top: 2rem;
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
    gap: 0.8rem;
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
`;
const Card = ({ preview, github, img, desc, title }) => {
  return (
    <Wrapper>
      <div className='split'>
        <figure>
          <LazyLoadImage
            src={img}
            effect='blur'
            alt='project image'
            placeholderSrc={placeholder}
          />
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
            scale: 0.9,
          }}
        >
          <a href={preview} target='_blank' rel='noreferrer'>
            Live Preview
          </a>
        </motion.button>
        <motion.button
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.1 },
          }}
          whileTap={{
            scale: 0.9,
          }}
        >
          <a href={github} target='_blank' rel='noreferrer'>
            Github Repo
          </a>
        </motion.button>
      </div>
    </Wrapper>
  );
};
export default Card;

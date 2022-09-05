import styled from 'styled-components';
import test from '../../assets/pexels-scott-webb-2117938_v5vcrh_c_scale,w_1966.jpg';

const Wrapper = styled.div`
  background: rgba(0, 91, 82, 1);
  border-radius: 15px;
  padding-bottom: 0.5rem;

  figure {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
    padding-bottom: 0.5rem;
    img {
      border-radius: 10px 10px 0 0;
      grid-column: 1/2;
      grid-row: 1/3;
    }
    figcaption {
      grid-column: 1/2;
      grid-row: 2/3;
      color: rgba(219, 242, 38, 1);
    }
  }
  .split {
    display: grid;
    align-items: center;
    justify-content: center;
  }

  .links {
    display: flex;
    justify-content: center;
  }

  .links button {
    margin: 0.7rem;
    padding: 0.3rem 1.5rem;
    border-radius: 15px;
    background: rgba(219, 242, 38, 1);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border: none;
    p {
      color: rgba(4, 40, 63, 1);
      font-weight: bold;
      font-size: 1rem;
    }
  }

  @media (min-width: 1025px) {
  }
`;
const Card = () => {
  return (
    <Wrapper>
      <div className='split'>
        <figure>
          <img src={test} alt='/' />
          <figcaption>
            <h2>le project</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, ab.
            </p>
          </figcaption>
        </figure>
      </div>
      <div className='links'>
        <button>
          <p>Live PreVue</p>
        </button>
        <button>
          <p>Github Repo</p>
        </button>
      </div>
    </Wrapper>
  );
};
export default Card;

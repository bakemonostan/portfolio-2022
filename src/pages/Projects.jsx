import styled from 'styled-components';
import { motion } from 'framer-motion';
import Card from '../components/shared/Card';

const Wrapper = styled.section`
  text-align: center;
  padding: 6rem 2rem;

  h2 {
    color: rgba(158, 193, 49, 1);
    font-size: 1.8rem;
  }
`;

const Grid = styled.div`
  display: grid;
  margin: 0 auto;
  justify-content: center;
  gap: 4rem;
  grid-template-columns: repeat(1, 320px);
  padding: 2rem 0;

  @media (min-width: 1025px) {
    grid-template-columns: repeat(2, 420px);
  }
`;

const Projects = () => {
  return (
    <Wrapper className='projects'>
      <h2>Projects</h2>
      <Grid>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Grid>
    </Wrapper>
  );
};
export default Projects;

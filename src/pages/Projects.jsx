import styled from 'styled-components';
import Card from '../components/shared/Card';
import dojo from '../assets/projects-images/dojo.png';
import gym from '../assets/projects-images/gym.png';
import manage from '../assets/projects-images/manage.jpg';

const Wrapper = styled.section`
  text-align: center;
  padding: 6rem 2rem;

  h2 {
    color: rgba(158, 193, 49, 1);
    font-size: 1.8rem;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 3rem 1rem;
`;

const Projects = () => {
  return (
    <Wrapper className='projects'>
      <h2>Projects</h2>
      <CardWrapper>
        <Card
          preview=''
          github=''
          img={dojo}
          desc='lorme ipsom posoem soroe jkgjagkjad  popepoerpe, p[i orme ipsom posoem soroe jkgjagkjad  popepoerpe, p[i orme ipsom posoem soroe jkgjagkjad  popepoerpe, p[i orme ipsom posoem soroe jkgjagkjad  popepoerpe, p[iorme ipsom posoem soroe jkgjagkjad  popepoerpe, p[i'
          title='TheDojo'
        />
        <Card
          preview=''
          github=''
          img={gym}
          desc='lorme ipsom posoem soroe jkgjagkjad  popepoerpe, p[i orme ipsom posoem soroe jkgjagkjad  popepoerpe, p[i orme ipsom posoem soroe jkgjagkjad  popepoerpe, p[i orme ipsom posoem soroe jkgjagkjad  popepoerpe, p[iorme ipsom posoem soroe jkgjagkjad  popepoerpe, p[i'
          title="Gold's Gym"
        />
        <Card
          preview=''
          github=''
          img={manage}
          desc='lorme ipsom posoem soroe jkgjagkjad  popepoerpe, p[i orme ipsom posoem soroe jkgjagkjad  popepoerpe, p[i orme ipsom posoem soroe jkgjagkjad  popepoerpe, p[i orme ipsom posoem soroe jkgjagkjad  popepoerpe, p[iorme ipsom posoem soroe jkgjagkjad  popepoerpe, p[i'
          title='Manage '
        />
      </CardWrapper>
    </Wrapper>
  );
};
export default Projects;

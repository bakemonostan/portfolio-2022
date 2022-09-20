import styled from 'styled-components';
import Card from '../components/shared/Card';
import { dojo, url, filter, manage, gym } from '../assets';

const Wrapper = styled.section`
  text-align: center;
  padding: 6rem 2rem;

  h2 {
    color: rgba(158, 193, 49, 1);
    font-size: 2rem;
    padding-bottom: 3rem;
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
          preview='https://bakemonostan.github.io/manage-landing-page/'
          github='https://github.com/bakemonostan/manage-landing-page'
          img={manage}
          desc='A basic landing page gotten from FrontEnd Mentors. Technologises used: HTML, CSS, JS, Tailwind'
          title='Manage '
        />
        <Card
          preview='https://job-filter-app.netlify.app/'
          github='https://github.com/bakemonostan/job-lisiting-w-filter'
          img={filter}
          desc='A single page app with static data that can be filterd through based on various clickable options. Technologies used, React, Styled Components'
          title='Job-Listing Filter'
        />
        <Card
          preview='https://url-shorty-app.netlify.app/'
          github='https://github.com/bakemonostan/url-shortener'
          img={url}
          desc='A url shortening web app. Allows links to be copied to clipboard on button click. Made use of custom hooks, react, and styled components for this.'
          title='Shorty'
        />
        <Card
          preview='https://gym-app-pract.netlify.app/'
          github='https://github.com/bakemonostan/gym-app'
          img={gym}
          desc='A web app that connects users to videos on fittness exercise.Makes use of multiple apis, filtering and pagination.  Technologies used: React, Apis, MUI'
          title="Gold's Gym"
        />
        <Card
          preview='https://dojo-project-app.netlify.app/login'
          github='https://github.com/bakemonostan/TheDojo'
          img={dojo}
          desc='A CRUD project managment  application with sign up, login in and authentication features. Users can comment on projects and filter through exisiting tasks. Technologies used: React, Firebase'
          title='TheDojo'
        />
      </CardWrapper>
    </Wrapper>
  );
};
export default Projects;

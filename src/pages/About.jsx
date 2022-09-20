import styled from 'styled-components';
import { Wrapper } from './Home';
import { Link } from 'react-router-dom';
import Skills from './Skills';

const AboutWrapper = styled(Wrapper)`
  display: flex;
  flex-flow: row wrap;
  height: auto;
  padding: 4rem 0;

  .about {
    flex: 0 1 620px;
  }

  .skills {
    flex: 0 1 620px;
    padding-top: 4rem;
  }

  h2 {
    padding: 1rem 0;
  }
  p {
    padding: 0;
  }

  @media (min-width: 1024px) {
    padding: 6rem 0;

    max-width: 1440px;
    text-align: left;

    .skills {
      text-align: right;
      padding-top: 0;
    }
  }
`;

const About = () => {
  return (
    <AboutWrapper>
      <div className='about'>
        <h2>About ME</h2>
        <p>
          I'm a Frontend web developer committed to the timely delivery of
          high-quality frontend services that meet the needs of my clients. See{' '}
          <span>
            <Link to='/projects'>Projects</Link>
          </span>{' '}
          <br />A strong team player who is consistently ready to help when
          required, learn, and cooperate effectively. Also a musicologist and
          guitar enthusiast. I'm interested in jobs where I can contribute,
          learn, and grow. Please contact me if you have a good position that
          suits my skills and experience.
        </p>
      </div>

      <div className='skills'>
        <h2>Current Skills</h2>
        <Skills />
      </div>
    </AboutWrapper>
  );
};
export default About;

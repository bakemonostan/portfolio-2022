import { motion } from 'framer-motion';
import styled from 'styled-components';

const skills = [
  'HTML',
  'CSS',
  'Javascript',
  'React',
  'VUEJS',
  'Redux',
  'NextJS',
  'Typescript',
  'MUI',
  'Zustand',
  'Webpack',
  'Framer Motion',
  'Tailwind CSS',
  'SASS',
  'Github',
  'Firebase',
  'MONGODB',
  'Contentful',
];

const Wrapper = styled.div`
  display: flex;
  gap: 0.8rem;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  .skill {
    /* flex: 0 0 auto; */
    color: rgba(4, 40, 63, 1);
    background-color: rgba(219, 242, 38, 1);
    border-radius: 2px;
    padding: 0.2rem 0.5rem;
    font-weight: bold;
  }

  @media (min-width: 765px) {
    justify-content: flex-end;
  }
`;

const Skills = () => {
  return (
    <Wrapper>
      {skills.map((skill, i) => {
        return (
          <motion.p
            key={i}
            className='skill'
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            whileHover={{ x: 1, y: 1 }}
          >
            {skill}
          </motion.p>
        );
      })}
    </Wrapper>
  );
};
export default Skills;

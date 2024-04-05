import { useInView } from 'react-intersection-observer';
import { Container, Wrapper, Title, Desc, SkillsContainer, Skill, SkillImage, SkillItem, SkillList, SkillTitle } from "./SkillsStyles";
import { skills } from '../../data/constants';
import { motion } from "framer-motion";

const Skills = () => {
  const [ref, inView] = useInView();

  return (
    <Container id="skills" ref={ref}>
      <Wrapper>
        <Title>Skills</Title>
        <Desc>Here are some of my skills on which I have been working on for the past 2 years.</Desc>

        <SkillsContainer>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.5, delay: index * 0.4 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              whileHover={{ scale: 1.05, cursor: 'pointer' }}
            >
              <Skill key={index}>
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillList>
                  {skill.skills.map((item, subIndex) => (
                    <SkillItem key={subIndex}>
                      <SkillImage src={item.image} key={subIndex} />
                      {item.name}
                    </SkillItem>
                  ))}
                </SkillList>
              </Skill>
            </motion.div>
          ))}
        </SkillsContainer>

      </Wrapper>
    </Container>
  );
};

export default Skills;

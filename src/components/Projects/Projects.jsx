import { Container, Wrapper, Title, Desc, CardContainer } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'
import PropTypes from 'prop-types'; // 

const Projects = ({ openModal, setOpenModal }) => {

    return (
        <Container id="projects">
            <Wrapper>
                <Title>Projects</Title>
                <Desc>
                    Coding my dreams into reality! Check out a selection of my standout projects that showcase my skills and enthusiasm
                </Desc>

                <CardContainer>
                    {projects.map((project, id) => (
                        <ProjectCard key={id} project={project} openModal={openModal} setOpenModal={setOpenModal} />
                    ))}
                </CardContainer>
            </Wrapper>
        </Container>
    )
}

Projects.propTypes = {
    openModal: PropTypes.func.isRequired,
    setOpenModal: PropTypes.func.isRequired,
};


export default Projects

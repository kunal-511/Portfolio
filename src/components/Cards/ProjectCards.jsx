

import PropTypes from 'prop-types';
import { Card, Image, Details, Tags, Tag, Title, Date, Description } from "./ProjectCardStyles"
const ProjectCards = ({ project, setOpenModal }) => {
    return (
        <Card onClick={() => setOpenModal({ state: true, project: project })}>
            <Image src={project.image} />
            <Tags>
                {project.tags?.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                ))}
            </Tags>
            <Details>
                <Title>{project.title}</Title>
                <Date>{project.date}</Date>
                <Description>{project.description}</Description>
            </Details>


        </Card>
    )
}
ProjectCards.propTypes = {
    project: PropTypes.shape({
        image: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string),
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
    setOpenModal: PropTypes.func.isRequired,
};
export default ProjectCards
import { education } from '../../data/constants'
import { Card, Top, Image, Body, Span, Name, Degree, Grade, Description, Date } from "./EducationCardStyle"

const EducationCard = ({ education }) => {
    return (
        <Card>
            <Top>
                <Image src={education.img} />
                <Body>
                    <Name>{education.school}</Name>
                    <Degree>{education.degree}</Degree>
                    <Date>{education.date}</Date>
                </Body>
            </Top>
            <Grade>{education.grade}</Grade>
            <Description>
                <Span>{education.desc}</Span>
            </Description>
        </Card>
    )
}
EducationCard.propTypes = {
    education: education.any,
};

export default EducationCard
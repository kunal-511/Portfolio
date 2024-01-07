
import { Card, Top, Body, Image, Role, Company, Date, Description, Skills, Span, ItemWrapper, Skill, Document } from "./ExperienceCardStyle"

const experienceCard = ({ experience }) => {
    return (
        <Card>
            <Top>
                <Image src={experience.img} />
                <Body>
                    <Role>{experience.role}</Role>
                    <Company>{experience.company}</Company>
                    <Date>{experience.date}</Date>
                </Body>
            </Top>
            <Description>
                {experience?.desc &&
                    <Span>{experience?.desc}</Span>

                }
                {experience?.skills &&
                    <>
                        <br />
                        <Skills>
                            <b>Skills:</b>
                            <ItemWrapper>
                                {experience?.skills?.map((skill, index) => (
                                    <Skill key={index}>• {skill}</Skill>
                                ))}
                            </ItemWrapper>
                        </Skills>
                    </>
                }
            </Description>
            {experience.doc &&
                <a href={experience.doc} target="new">
                    <Document src={experience.doc} />
                </a>
            }
        </Card>
    )
}

export default experienceCard
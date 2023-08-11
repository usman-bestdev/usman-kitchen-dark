import Image from "next/image";
import {
  cardBodyClasses,
  cardClasses,
  cardImageClasses,
  cardTitleClasses,
  headingClasses,
  mainContainerClasses,
  separatorImageClasses,
  subHeadingClasses,
} from "./styles/ourChef";
import { Card, Col, Container, Row } from "react-bootstrap";
import { breakpoints, teamData } from "./constant";

const OurChef: React.FC = () => {
  return (
    <div className={mainContainerClasses}>
      <p className={headingClasses}>Flavors for royalty</p>

      <div className={separatorImageClasses}>
        <Image src={"/separator.png"} fill alt="OurStrength Image" sizes="" />
      </div>
      <p className={subHeadingClasses}>Meet Our Chef</p>

      <Container>
        <Row className="m-0 justify-content-center">
          {teamData.map((teamMember) => (
            <Col
              {...breakpoints}
              key={teamMember.name}
              className="p-0 d-flex justify-content-center  mt-5">
              <Card className={cardClasses}>
                <Card.Img
                  variant="top"
                  src={teamMember.imageSource}
                  className={cardImageClasses}
                />
                <Card.Body className={cardBodyClasses}>
                  <Card.Title className={cardTitleClasses}>
                    {teamMember.name}
                  </Card.Title>
                  <Card.Text className={headingClasses}>
                    {teamMember.designation}
                  </Card.Text>
                  <Card.Text className="secondaryColor">
                    {teamMember.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default OurChef;

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
import { useState } from "react";
import { animateImage } from "./styles/amination";
import ChefCard from "./chefCard";

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
              <ChefCard {...teamMember} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default OurChef;

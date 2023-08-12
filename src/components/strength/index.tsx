import { Card, Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import {
  containerClasses,
  mainContainerClasses,
  mainHeadingClasses,
  mainRowClasses,
  strengthSeparatorImageClasses,
  subHeadingClasses,
} from "./styles/strength";
import { cardData } from "./constant";
import StrengthCard from "./strengthCard";

const OurStrength: React.FC = () => {
  return (
    <div className={mainContainerClasses}>
      <Container className={containerClasses}>
        <p className={mainHeadingClasses}>WHY CHOSE US</p>

        <div className={strengthSeparatorImageClasses}>
          <Image src={"/separator.png"} fill alt="OurStrength Image" sizes="" />
        </div>

        <p className={subHeadingClasses}>Our Strength</p>

        <Row className={mainRowClasses}>
          {cardData.map((card, index) => (
            <StrengthCard
              {...card}
              key={card.title}
              dark={(index + 1) % 2 != 0}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default OurStrength;

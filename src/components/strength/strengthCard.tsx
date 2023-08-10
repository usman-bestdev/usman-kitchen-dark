import { Card, Col } from "react-bootstrap";
import Image from "next/image";

import { breakpoints } from "./constant";
import {
  cardStyleDarkClasses,
  containerClasses,
  strengthCardHeadingClasses,
  strengthDescriptionClasses,
  strengthImageContainerClasses,
} from "./styles/strength";
import { IStrengthCardProps } from "./types";

const StrengthCard: React.FC<IStrengthCardProps> = ({
  imageSource,
  title,
  description,
}) => {
  return (
    <Col {...breakpoints}>
      <Card className={cardStyleDarkClasses}>
        <Card.Body className={containerClasses}>
          <div className={strengthImageContainerClasses}>
            <Image src={imageSource} fill sizes="" alt="OurStrength Image" />
          </div>
          <Card.Title className={strengthCardHeadingClasses}>
            {title}
          </Card.Title>
          <Card.Text className={strengthDescriptionClasses}>
            {description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default StrengthCard;

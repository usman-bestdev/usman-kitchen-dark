import { Card } from "react-bootstrap";

import {
  cardBodyClasses,
  cardClasses,
  cardDescriptionClasses,
  cardImageClasses,
  cardTitleClasses,
  priceClasses,
} from "./styles/bestSpecialties";
import { ISpecialtiesCardProps } from "./types";

const SpecialtiesCard: React.FC<ISpecialtiesCardProps> = ({
  id,
  imageSource,
  description,
  name,
  price,
}) => {
  return (
    <Card className={`${cardClasses} ${(id + 1) % 2 == 0 && "mt-5"}`}>
      <Card.Img variant="top" src={imageSource} className={cardImageClasses} />
      <Card.Body className={cardBodyClasses}>
        <Card.Title className={cardTitleClasses}>{name}</Card.Title>
        <Card.Text className={cardDescriptionClasses}>{description}</Card.Text>
        <Card.Text className={priceClasses}>${price.toFixed(2)}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SpecialtiesCard;

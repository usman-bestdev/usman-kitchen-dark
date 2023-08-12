import { Card } from "react-bootstrap";
import {
  cardBodyClasses,
  cardClasses,
  cardImageClasses,
  cardTitleClasses,
  headingClasses,
} from "./styles/ourChef";
import { animateImage } from "./styles/amination";
import { useState } from "react";
import { IChefCardProps } from "./types";

const ChefCard: React.FC<IChefCardProps> = ({
  name,
  imageSource,
  description,
  designation,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <Card
      className={cardClasses}
      style={{ backgroundColor: "#121111" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <Card.Img
        variant="top"
        src={imageSource}
        className={`${cardImageClasses} ${isHovered ? animateImage : ""}`}
      />
      <Card.Body className={cardBodyClasses}>
        <Card.Title className={cardTitleClasses}>{name}</Card.Title>
        <Card.Text className={headingClasses}>{designation}</Card.Text>
        <Card.Text className="secondaryColor">{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ChefCard;

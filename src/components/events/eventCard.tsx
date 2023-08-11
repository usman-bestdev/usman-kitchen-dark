import { Card } from "react-bootstrap";

import {
  cardBaseClasses,
  cardBaseContentClasses,
  cardDateClasses,
  cardDescription,
  cardImageClasses,
  cardNameClasses,
  eventCardClasses,
  imageOverlyClasses,
} from "./styles/events";
import { IEventCardProps } from "./types";

const EventCard: React.FC<IEventCardProps> = ({
  imageSource,
  date,
  name,
  description,
}) => {
  return (
    <Card className={eventCardClasses}>
      <Card.Img
        src={imageSource}
        className={cardImageClasses}
        alt="Card image"
      />
      <Card.ImgOverlay className={imageOverlyClasses}>
        <Card.Text className={cardDateClasses}>{date}</Card.Text>
        <div className={cardBaseContentClasses}>
          <Card.Text className={cardNameClasses}>{name}</Card.Text>
          <Card.Text className={cardDescription}>{description}</Card.Text>
        </div>
        <div className={cardBaseClasses} />
      </Card.ImgOverlay>
    </Card>
  );
};

export default EventCard;

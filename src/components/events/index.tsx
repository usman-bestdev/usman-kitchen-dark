import Image from "next/image";
import { Button, Card, Col, Row } from "react-bootstrap";

import { breakpoints, eventsData } from "./constant";
import {
  buttonClasses,
  cardBaseClasses,
  cardBaseContentClasses,
  cardDateClasses,
  cardDescription,
  cardImageClasses,
  cardNameClasses,
  eventCardClasses,
  firstHeading,
  imageOverlyClasses,
  mainColClasses,
  mainContainerClasses,
  secondHeading,
  separatorImageClasses,
} from "./styles/events";
import EventCard from "./eventCard";

const Events: React.FC = () => {
  return (
    <div className={mainContainerClasses}>
      <p className={firstHeading}>Recant Updates</p>

      <div className={separatorImageClasses}>
        <Image src={"/separator.png"} fill alt="OurStrength Image" sizes="" />
      </div>
      <p className={secondHeading}>Upcoming Events</p>

      <Row className="m-0">
        {eventsData.map((event) => (
          <Col {...breakpoints} className={mainColClasses} key={event.id}>
            <EventCard {...event} />
          </Col>
        ))}
      </Row>

      <Button className={buttonClasses} variant="outline">
        VIEW OUR BLOGS
      </Button>
    </div>
  );
};

export default Events;

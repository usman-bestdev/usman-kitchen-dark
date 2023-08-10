import { Col, Row } from "react-bootstrap";
import FeaturedMenu from "./featuredMenu";

import { breakpoints, leftContainer, rightContainer } from "./constant";
import {
  descriptionClasses,
  featuredImageLayer,
  headingClasses,
  subHeadingClasses,
} from "./styles/featured";

const Featured: React.FC = () => {
  return (
    <Row className="m-0">
      <Col {...breakpoints} className="p-0">
        <FeaturedMenu {...leftContainer} />
      </Col>

      <Col {...breakpoints} className={featuredImageLayer}>
        <p className={subHeadingClasses}>LATEST</p>
        <p className={headingClasses}>Upcoming Events</p>
        <p className={descriptionClasses}>Simply dummy printing and setting.</p>
        <p className={subHeadingClasses}>JOIN EVENT</p>
      </Col>

      <Col {...breakpoints} className="p-0">
        <FeaturedMenu {...rightContainer} />
      </Col>
    </Row>
  );
};

export default Featured;

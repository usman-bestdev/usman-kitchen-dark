import { Col, Container, Row } from "react-bootstrap";

import { breakpoints, offersData } from "./constant";
import {
  cardHeading,
  cardView,
  contentContainerClasses,
  descriptionClasses,
  headingClasses,
  mainColClasses,
  mainContainerClasses,
  pattern,
  separatorImageClasses,
  subHeadingClasses,
} from "./styles/ourOffers";
import Image from "next/image";

const OurOffers: React.FC = () => {
  return (
    <>
      <div className={mainContainerClasses}>
        <div className={contentContainerClasses}>
          <p className={headingClasses}>Flavors for royalty</p>

          <div className={separatorImageClasses}>
            <Image
              src={"/separator.png"}
              fill
              alt="OurStrength Image"
              sizes=""
            />
          </div>

          <p className={subHeadingClasses}>We Offer Top Notch</p>

          <p className={descriptionClasses}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry lorem Ipsum has been the industrys standard dummy text
            ever.
          </p>
        </div>

        <Container>
          <Row className="m-0 d-flex justify-content-center">
            {offersData.map((offer, index) => (
              <Col
                key={offer.id}
                {...breakpoints}
                className={`${mainColClasses} ${
                  (index + 1) % 2 == 0 && "mt-5"
                }`}>
                <div className={pattern}>
                  <Image
                    src={"/pattern-8.png"}
                    fill
                    alt="OurStrength Image"
                    sizes=""
                  />
                </div>
                <div style={{ position: "absolute", marginTop: "30px" }}>
                  <div
                    style={{
                      position: "relative",
                      width: "290px",
                      height: "342px",
                    }}>
                    <Image
                      src={offer.imageSource}
                      fill
                      alt="OurStrength Image"
                      sizes=""
                    />
                  </div>
                </div>
                <p className={cardHeading}>{offer.heading}</p>
                <p className={cardView}>VIEW MENU</p>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default OurOffers;

import { Col, Container, Row } from "react-bootstrap";

import { breakpoints, offersData } from "./constant";
import {
  contentContainerClasses,
  descriptionClasses,
  headingClasses,
  mainContainerClasses,
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
          <Row className="m-0">
            {offersData.map((offer) => (
              <Col
                key={offer}
                {...breakpoints}
                className="p-0 d-flex flex-column align-items-center">
                <div
                  style={{
                    position: "relative",
                    width: "140px",
                    height: "402px",
                  }}>
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
                <p className="fs-3 text-white mt-4">{offer.heading}</p>

                <p className="primaryColor fs-6">VIEW MENU</p>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default OurOffers;

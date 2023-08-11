import { Button, Col, Row } from "react-bootstrap";
import {
  buttonClasses,
  descriptionClasses,
  dimPriceClasses,
  dishBackgroundClasses,
  dishDescriptionClasses,
  headingClasses,
  pricesContainerClasses,
  separatorImageClasses,
  subHeadingClasses,
} from "./styles/specialDish";
import Image from "next/image";

const SpecialDish: React.FC = () => {
  return (
    <Row className="m-0">
      <Col xl={6} lg={6} md={12} sm={12} className="p-0">
        <div className={dishBackgroundClasses}>
          <Image
            src={"/image-1.jpg"}
            layout="fill"
            objectFit="cover"
            alt="OurStrength Image"
          />
        </div>
      </Col>

      <Col className={dishDescriptionClasses} xl={6} lg={6} md={12} sm={12}>
        <Row className="m-5">
          <Col xl={1} lg={1} md={12} sm={12}>
            <Image
              src={"/review.png"}
              width={28}
              height={41}
              alt="OurStrength Image"
            />
          </Col>
          <Col xl={11} lg={11} md={12} sm={12}>
            <p className={headingClasses}>Flavors for royalty</p>

            <div className={separatorImageClasses}>
              <Image
                src={"/separator.png"}
                fill
                alt="OurStrength Image"
                sizes=""
              />
            </div>

            <p className={subHeadingClasses}>Meet Our Chef</p>

            <p className={descriptionClasses}>
              Lorem Ipsum is simply dummy text of the printingand typesetting
              industry lorem Ipsum has been the industrys standard dummy text
              ever since the when an unknown printer took a galley of type.
            </p>

            <div className={pricesContainerClasses}>
              <p className={dimPriceClasses}>$40.00</p>
              <p className="primaryColor">$20.00</p>
            </div>

            <Button className={buttonClasses} variant="outline">
              VIEW ALL MENU
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
export default SpecialDish;

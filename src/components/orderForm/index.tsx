import { Button, Col, Container, Form, Row } from "react-bootstrap";
import {
  addressContainerClasses,
  buttonClasses,
  formContainerClasses,
  inputClasses,
  mainContainerClasses,
} from "./styles/orderForm";

const OrderForm: React.FC = () => {
  return (
    <div className={mainContainerClasses}>
      <Container>
        <Row className="m-0 justify-content-center">
          <Col lg={7} md={12} sm={12} className={formContainerClasses}>
            <Container>
              <p className="fs-2 text-white primaryFont">Online Reservation</p>
              <div className="d-flex gap-1 justify-content-center">
                <p className="text-white">Booking request</p>
                <p className="primaryColor">+88-123-123456</p>
                <p className="text-white">or fill out the order form</p>
              </div>
              <Form>
                <Row className="m-0">
                  <Col lg={6}>
                    <Form.Control
                      placeholder="Your Name"
                      className={inputClasses}
                    />
                  </Col>
                  <Col lg={6}>
                    <Form.Control
                      placeholder="Phone Number"
                      className={inputClasses}
                    />
                  </Col>
                </Row>

                <Row className="m-0">
                  <Col lg={4}>
                    <Form.Select className={inputClasses}>
                      <option>Person 1</option>
                      <option>Persons 2</option>
                      <option>Person 5</option>
                    </Form.Select>
                  </Col>
                  <Col lg={4}>
                    <Form.Select className={inputClasses}>
                      <option>DD-MM-YYY</option>
                    </Form.Select>
                  </Col>

                  <Col lg={4}>
                    <Form.Select className={inputClasses}>
                      <option>07 : 00 : pm</option>
                    </Form.Select>
                  </Col>
                </Row>

                <Row className="m-0">
                  <Col lg={12}>
                    <Form.Control
                      placeholder="Message"
                      as="textarea"
                      rows={5}
                      className={inputClasses}
                    />

                    <Button className={buttonClasses} variant="outline">
                      VIEW ALL MENU
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Container>
          </Col>
          <Col lg={4} md={12} sm={12} className={addressContainerClasses}>
            <p className="fs-2 text-white primaryFont">Contact Us</p>
            <p className="text-white">Booking request</p>
            <p className="primaryColor fs-4">+88-123-123456</p>
            <p className="text-white">Location</p>
            <p className="secondaryColor">Restaurant St, Delicious City, </p>
            <p className="secondaryColor"> London 9578, UK</p>
            <p className="text-white">Lunch Time</p>
            <p className="secondaryColor"> Monday to Sunday</p>
            <p className="secondaryColor">11.00 am - 2.30pm</p>
            <p className="text-white">Dinner Time</p>
            <p className="secondaryColor"> Monday to Sunday</p>
            <p className="secondaryColor">05.00 pm - 10.00pm</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OrderForm;

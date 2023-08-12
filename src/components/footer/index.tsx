import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  ListGroup,
  Row,
} from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";

import styles from "./footer.module.css";

const Footer: React.FC = () => {
  return (
    <div className={styles.mainFooter}>
      <div className={styles.imageLayer} />
      <div className={styles.upperSection}>
        <Container>
          <Row className={styles.clearfix}>
            <Col
              lg={6}
              md={12}
              sm={12}
              className={`${styles.footerCol} ${styles.infoCol} p-0
             `}>
              <div className={styles.inner}>
                <div className={styles.content}>
                  <div className={styles.logo}>
                    <Image
                      src={"/logo.png"}
                      width={160}
                      height={50}
                      alt="Logo image"
                    />
                  </div>
                  <ListGroup>
                    <ListGroup.Item className={styles.customListGroupItem}>
                      Restaurant St, Delicious City, London 9578, UK
                    </ListGroup.Item>
                    <ListGroup.Item className={styles.customListGroupItem}>
                      <Link
                        href="mailto:booking@domainname.com"
                        className={styles.linkStyle}>
                        booking@domainname.com
                      </Link>
                    </ListGroup.Item>
                    <ListGroup.Item className={styles.customListGroupItem}>
                      <Link
                        href="tel:+88-123-123456"
                        className={styles.linkStyle}>
                        Booking Request : +88-123-123456
                      </Link>
                    </ListGroup.Item>
                    <ListGroup.Item className={styles.customListGroupItem}>
                      Open : 09:00 am - 01:00 pm
                    </ListGroup.Item>
                  </ListGroup>
                  <div className={styles.separator}>
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className={styles.newsletter}>
                    <h3 className="primaryFont text-white">
                      Get News &amp; Offers
                    </h3>
                    <div className="text">
                      Subscribe us &amp; Get <span>25% Off.</span>
                    </div>

                    <div className={styles.newsletterForm}>
                      <InputGroup className={styles.inputGroup}>
                        <InputGroup.Text className={styles.iconContainer}>
                          @
                        </InputGroup.Text>
                        <Form.Control
                          className={styles.input}
                          placeholder="ENTER EMAIL"
                        />
                        <Button className={styles.btnStyle}>SUBSCRIBE</Button>
                      </InputGroup>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            <Col
              className={`${styles.footerCol} ${styles.linksCol} p-0`}
              lg={3}
              md={12}
              sm={12}>
              <div className={styles.inner}>
                <ListGroup>
                  {["HOME", "MENUS", "ABOUT US", "OUR CHEFS", "CONTACT"].map(
                    (item) => (
                      <ListGroup.Item
                        key={item}
                        className={`${styles.customListGroupItem} ${styles["item"]}`}>
                        <Link href="/" className={styles.linkStyle}>
                          {item}
                        </Link>
                      </ListGroup.Item>
                    )
                  )}
                </ListGroup>
              </div>
            </Col>

            <Col
              lg={3}
              md={12}
              sm={12}
              className={`${styles.footerCol} ${styles.linksCol} ${styles.last} p-0`}>
              <div className={styles.inner}>
                <ListGroup>
                  {[
                    "FACEBOOK",
                    "INSTAGRAM",
                    "TWITTER",
                    "YOUTUBE",
                    "GOOGLE MAP",
                  ].map((item) => (
                    <ListGroup.Item
                      key={item}
                      className={`${styles.customListGroupItem} ${styles.item}`}>
                      <Link href="/" className={styles.linkStyle}>
                        {item}
                      </Link>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </div>
            </Col>
          </Row>
          <Row>
            <div className={styles.footerBottom}>
              <div className={styles.copyright}>
                © 2022 Restaurt. All Rights Reserved | Crafted by
                <Link href="/" className={styles.linkStyle}>
                  Kalanidhi Themes
                </Link>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Footer;

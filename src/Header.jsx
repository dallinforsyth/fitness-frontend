import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Carousel from "react-bootstrap/Carousel";
import "./Header.css";
import { AuthenticationLinks } from "./AuthenticationLinks";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import logo from "./assets/yeat.png";

export function Header() {
  return (
    <div>
      <Container style={{ height: "4rem" }}>
        <Row>
          <Col style={{ fontSize: 30 }}>
            <p className="my-1 mx-4"></p>
            <img style={{ width: 200, height: 100 }} src={logo} alt="BigCo Inc. logo" />
          </Col>
        </Row>
      </Container>
      <>
        <Carousel variant="dark" className="my-5 mh-100">
          <Carousel.Item>
            <img
              className="d-block w-100 my-auto img-fluid"
              src="https://no-cache.hubspot.com/cta/default/2540257/2e1ca739-0c47-44da-8434-57de856c8982.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h5></h5>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 my-auto img-fluid"
              src="https://www.yourtango.com/sites/default/files/image_blog/gym-quotes-workout-captions.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5></h5>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 my-auto img-fluid"
              src="https://www.olympicmuscle.com/wp-content/uploads/2019/09/beginner-workout-plan-for-weight-loss.png"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h5></h5>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <header>
          <nav>
            <Navbar bg="danger" variant="dark" sticky="top">
              <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link href="/">Workouts</Nav.Link>

                  <Nav.Link href="/pricing">Pricing</Nav.Link>
                  <AuthenticationLinks />
                </Nav>
              </Container>
            </Navbar>
          </nav>
        </header>
      </>
    </div>
  );
}

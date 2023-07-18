import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Carousel from "react-bootstrap/Carousel";
import "./Header.css";
import { AuthenticationLinks } from "./AuthenticationLinks";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

export function Header() {
  return (
    <div>
      <Container style={{ height: "4rem" }}>
        <Row>
          <Col lg="auto">yo</Col>
        </Row>
      </Container>
      <>
        <Carousel variant="dark" className="mh-100">
          <Carousel.Item>
            <img
              className="d-block w-100 my-auto img-fluid"
              src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/rockcms/2021-12/211208-working-out-stock-mn-1310-55e1c7.jpg"
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
              src="https://media.istockphoto.com/id/615883260/photo/difficult-doesnt-mean-impossible.jpg?s=612x612&w=0&k=20&c=cAEJvjTFRuF9H9gRov1Aj4X4I6xV6DSvMwWsf-2IW-0="
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
              src="https://goldsgym.in/uploads/blog/compress-strong-man-training-gym-min.jpg"
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
            <Navbar bg="dark" variant="dark" sticky="top">
              <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link href="/">Your Workouts</Nav.Link>

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

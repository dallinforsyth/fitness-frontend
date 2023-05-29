import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Carousel from "react-bootstrap/Carousel";

export function Header() {
  return (
    <>
      <Carousel variant="dark">
        <Carousel.Item>
          <img className="d-block w-100" src="holder.js/800x400?text=First slide&bg=f5f5f5" alt="First slide" />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="holder.js/800x400?text=Second slide&bg=eee" alt="Second slide" />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="holder.js/800x400?text=Third slide&bg=e5e5e5" alt="Third slide" />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <header>
        <nav>
          <Navbar bg="dark" variant="dark" sticky="top">
            <Container>
              <Navbar.Brand href="#home">Home</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home">Your Workouts</Nav.Link>
                <Nav.Link href="#pricing">Your Account</Nav.Link>
                <Nav.Link href="#features">Pricing</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </nav>
      </header>
    </>
  );
}

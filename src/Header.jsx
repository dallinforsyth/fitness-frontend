import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export function Header() {
  return (
    <header>
      <nav>
        <Navbar bg="dark" variant="dark" fixed="top">
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
  );
}

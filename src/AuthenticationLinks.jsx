import Nav from "react-bootstrap/Nav";

export function AuthenticationLinks() {
  if (localStorage.jwt === undefined) {
    return (
      <>
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/signup">Signup</Nav.Link>
      </>
    );
  } else {
    return (
      <>
        <Nav.Link href="/logout">Logout</Nav.Link>
      </>
    );
  }
}

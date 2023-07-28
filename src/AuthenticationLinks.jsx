import Nav from "react-bootstrap/Nav";
import axios from "axios";

export function AuthenticationLinks() {
  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };

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
        <Nav.Link href="/youraccount">Your Account</Nav.Link>
        <Nav.Link href="/create">Create</Nav.Link>
        <Nav.Link href="#" onClick={handleClick}>
          Logout
        </Nav.Link>
      </>
    );
  }
}

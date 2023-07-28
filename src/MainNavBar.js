import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "./img/logo.svg";

function MainNavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
      <span className="bs-icon-sm bs-icon-rounded d-flex justify-content-center align-items-center me-2 bs-icon" style={{fontSize: "20px", backgroundImage: `url(${logo})`, width: "105px", height: "100px"}}></span>
        <Navbar.Brand href="/">Lemaca</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/herd">Herd</Nav.Link>
            <Nav.Link href="/awards">Awards</Nav.Link>
            <Nav.Link href="/stud">Stud Service</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavBar;
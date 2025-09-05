import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarHeader() {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqrbMnkHSrD7vaWFgZ6tXcDYeTWewHlXsbng&s" style={{width:'50px',height:'50px'}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto fs-4" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <NavDropdown title="Admin" id="collapsible-nav-dropdown">
                              <NavDropdown.Item href="#action/3.1">User</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Setting</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Reports</NavDropdown.Item>

            </NavDropdown>
              <NavDropdown title="Manager" id="collapsible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Project</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Team</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Reports</NavDropdown.Item>

              </NavDropdown>
            <NavDropdown title="User" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
             Task
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets"><button className='bg-primary'>Login</button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHeader;
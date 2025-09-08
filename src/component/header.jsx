import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../App.css";
import LoginForm from '../page/loginform';
import { useNavigate } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";

function NavbarHeader({setRole}) {
    const navigate = useNavigate();

  return (
    <Navbar collapseOnSelect expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqrbMnkHSrD7vaWFgZ6tXcDYeTWewHlXsbng&s" style={{width:'50px',height:'50px'}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto fs-4" style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'40px'}}>
 <NavDropdown 
    title="Admin" 
    id="collapsible-nav-dropdown" 
    className="no-caret"
    >
              <NavDropdown.Item onClick={() => navigate("/user")}>User</NavDropdown.Item>
              <NavDropdown.Item>Setting</NavDropdown.Item>
              <NavDropdown.Item >Reports</NavDropdown.Item>

            </NavDropdown>
              <NavDropdown title="Manager"  id="collapsible-nav-dropdown" className="no-caret">
                  <NavDropdown.Item >Project</NavDropdown.Item>
                  <NavDropdown.Item >Team</NavDropdown.Item>
                  <NavDropdown.Item >Reports</NavDropdown.Item>

              </NavDropdown>
            <NavDropdown title="User"  id="collapsible-nav-dropdown" className="no-caret">
              <NavDropdown.Item >My Profile</NavDropdown.Item>
              <NavDropdown.Item >
             Task
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* <Nav>
            <button
              className='bg-primary'
              onClick={() => {
            navigate("/loginform"); // navigate inside React, no page reload
                   // reset role if needed
          }}             >
              Login
            </button>
          </Nav> */}
  <button className="w-10 h-10  flex items-center justify-center text-primary rounded-full">
  <CgProfile size={20} />
</button>
</Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHeader;

import './NavbarBelt.css'
import amazonLogo from '../../../assets/amazonLogo.png'
import LocationIcon from './Icons/location'
import SearchIcon from './Icons/search'
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import UserIcon from './Icons/user'
import LocationOnIcon from '@mui/icons-material/LocationOn';
export default function NavbarBelt() {
  return (
    <>
<Navbar expand="lg" className="bg-dark  d-md-none" variant="dark">
  <Container className="d-flex justify-content-between align-items-center">
    <div className="d-flex align-items-center">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Brand href="#home" className="ms-2">
        <div className='leftNavbarLogo'>
          <a href='#'>
            <img className='amazonLogoNavbar img-fluid' src={amazonLogo} alt='amazonLogo' />
          </a>
        </div>
      </Navbar.Brand>
    </div>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
<span>sigin in <UserIcon/> </span>
  </Container>
</Navbar>




 






<div  className='navbarBelt d-flex  justify-content-space-between align-items-center navbarlg '>
       <div  className='leftNavbarBelt d-flex gap-2 '>
        <div className='leftNavbarLogo  '>
       <a href='#' ><img  className='amazonLogoNavbar img-fluid ' src={amazonLogo} alt='amazonLogo'/></a>
        </div>
        <div className='location  '>
          <span className='m-3' >  Deliver to </span>
          <div className='d-flex flex-row'>
          <LocationOnIcon/> <p  className='blod'>Palestinian Terri...  </p></div>
        </div>
       </div>

       <div  className='navbarBeltSearchBox' >
       <form className="d-flex" role="search">
       
<div>
<Dropdown>
            <Dropdown.Toggle variant='secondary' id='dropdown-basic-categories'>
              All
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href='#'>Action</Dropdown.Item>
              <Dropdown.Item href='#'>Another action</Dropdown.Item>
              <Dropdown.Item href='#'>Something else here</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
 </div>




        <input className="form-control me-2" type="search" placeholder="Search Amazon" aria-label="Search"  />
        <SearchIcon />
    </form>
      

       </div>


       <div   className='rightNavbarBelt'></div>
       <div className="dropdown ">
       <Dropdown>
            <Dropdown.Toggle variant='secondary' id='dropdown-basic'>
           <div className='d-flex flex-column'>
            <span>Hello,sing in</span> 
              <span>Account & Lists</span>
              </div>
          
            </Dropdown.Toggle>

            <Dropdown.Menu >
              <Dropdown.Item href='#'>Action</Dropdown.Item>
              <Dropdown.Item href='#'>Another action</Dropdown.Item>
              <Dropdown.Item href='#'>Something else here</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>


</div>




       </div>

       


     
    </>
  )
}

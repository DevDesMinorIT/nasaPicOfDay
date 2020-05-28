import React from 'react';
import { Nav, NavItem, Navbar, NavbarText, NavLink } from 'reactstrap';

const HeadingSection = () => {
  return(
  <>
    <Navbar color='dark'>
      <Nav>
        <NavItem>
          <NavLink href='#'>Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='#'>Daily</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href='#'>API</NavLink>
        </NavItem>
      </Nav>
      <NavbarText className='nasaFont'>NASA</NavbarText>
    </Navbar>  
  </>
)
}
export default HeadingSection;
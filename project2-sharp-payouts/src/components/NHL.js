import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap'


const NHL = () => {
  return (
    <Nav>
        <NavItem>
          <NavLink active href="#">
            Link
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            Another Link
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">
            Disabled Link
          </NavLink>
        </NavItem>
      </Nav> 
  )
};

export default NHL;

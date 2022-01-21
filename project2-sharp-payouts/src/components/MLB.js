import React from 'react';
import { Nav, NavItem, NavLink, Table } from 'reactstrap'


const MLB = () => {
  return (
    <div>
      <Nav>
          <NavItem>
            <NavLink active href="#">
              NBA
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">
              NFL
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink active href="#">
              MLB
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink active href="#">
              NHL
            </NavLink>
          </NavItem>
        </Nav>

        <div>League logo and name</div>

        <Table hover>
            <thead>
              <tr>
                <th>
                  Date
                </th>
                <th>
                  Spread
                </th>
                <th>
                  Total
                </th>
                <th>
                  Moneyline
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  Team 1 vs Team 2 <br/>Game location and time
                </th>
                <td>
                  Team 1 odds <br/> Team 2 odds
                </td>
                <td>
                  Over odds <br/> under odds
                </td>
                <td>
                Team 1 odds <br/> Team 2 odds
                </td>
              </tr>
              <tr>
                <th scope="row">
                  Team 1 vs Team 2 <br/>Game location and time
                </th>
                <td>
                  Team 1 odds <br/> Team 2 odds
                </td>
                <td>
                  Over odds <br/> under odds
                </td>
                <td>
                Team 1 odds <br/> Team 2 odds
                </td>
              </tr>
              <tr>
                <th scope="row">
                  Team 1 vs Team 2 <br/>Game location and time
                </th>
                <td>
                  Team 1 odds <br/> Team 2 odds
                </td>
                <td>
                  Over odds <br/> under odds
                </td>
                <td>
                Team 1 odds <br/> Team 2 odds
                </td>
              </tr>
            </tbody>
        </Table> 
      </div> 
  )
};

export default MLB;

import React from 'react';
import { Nav, NavItem, NavLink, Table } from 'reactstrap'


const NHL = () => {
  const nhlLogo = require("https://1000logos.net/wp-content/uploads/2017/05/NHL-emblem-500x450.jpg").default

  return (
    <div>
      <Nav>
          <NavItem>
          <NavLink active href={"/NBA"}>NBA</NavLink>
          </NavItem>
          <NavItem>
          <NavLink active href={"/NFL"}>NFL</NavLink>
          </NavItem>
          <NavItem>
            <NavLink active href={"/MLB"}>MLB</NavLink>
          </NavItem>
          <NavItem>
          <NavLink active href={"/NHL"}>NHL</NavLink>
          </NavItem>
        </Nav>

        <div>
          {`${nhlLogo} | NHL`}
        </div>

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

export default NHL;

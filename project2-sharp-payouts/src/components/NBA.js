import React, { useState, useEffect }from 'react';
import { Nav, NavItem, NavLink, Table } from 'reactstrap'



const NBA = () => { 
  const nbaLogo = require("https://blog.logomyway.com/wp-content/uploads/2017/01/nba-logo-design.jpg").default

  const [nba, setNba] = useState([])
  useEffect(() => {
    const url = 'https://api.the-odds-api.com/v4/sports/basketball_nba/odds/?regions=us&oddsFormat=american&markets=spreads&apiKey=7016872381cf91ff6bd37f4ec388ae9b'
    fetch(url)
        .then((res) => res.json())
        .then((json) => {
          setNba(json)
        })
        .catch(console.error)
  }, [])

  if (!nba) {
    return <p>Loading current odds ...</p>
  }


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
          {`${nbaLogo} | NBA`}
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

export default NBA;
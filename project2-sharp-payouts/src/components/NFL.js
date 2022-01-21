import React, { useState, useEffect } from 'react';
import { Nav, NavItem, NavLink, Table } from 'reactstrap'


const NFL = () => {
  const nflLogo = require("https://i0.wp.com/sportytell.com/wp-content/uploads/2020/11/NFL-Team-Logos.jpg?resize=680%2C350&ssl=1").default

  //---------spread fetch request --------------
  const [nflSpread, setNflSpread] = useState([])
  useEffect(() => {
    const url = 'https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds/?regions=us&oddsFormat=american&markets=spreads&apiKey=7016872381cf91ff6bd37f4ec388ae9b'
    fetch(url)
        .then((res) => res.json())
        .then((json) => {
          setNflSpread(json)
        })
        .catch(console.error)
  }, [])

//---------totals fetch request --------------
  const [nflTotals, setNflTotals] = useState([])
    useEffect(() => {
      const url = 'https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds/?regions=us&oddsFormat=american&markets=totals&apiKey=7016872381cf91ff6bd37f4ec388ae9b'
      fetch(url)
          .then((res) => res.json())
          .then((json) => {
            setNflTotals(json)
          })
          .catch(console.error)
    }, [])

//---------moneyline fetch request --------------
  const [nflMoneyline, setNflMoneyline] = useState([])
  useEffect(() => {
    const url = 'https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds/?regions=us&oddsFormat=american&markets=h2h&apiKey=7016872381cf91ff6bd37f4ec388ae9b'
    fetch(url)
        .then((res) => res.json())
        .then((json) => {
          setNflMoneyline(json)
        })
        .catch(console.error)
  }, [])

  if (!nflSpread, !nflTotals, !nflMoneyline) {
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
          {`${nflLogo} | NFL`}
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

export default NFL;

import React, { useState, useEffect } from 'react';
import { Nav, NavItem, NavLink, Table } from 'reactstrap'


const MLB = () => {
  const mlbLogo = require("https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Major_League_Baseball_logo.svg/1920px-Major_League_Baseball_logo.svg.png").default

  //---------spread fetch request --------------
  const [mlbSpread, setMlbSpread] = useState([])
  useEffect(() => {
    const url = 'https://api.the-odds-api.com/v4/sports/baseball_mlb/odds/?regions=us&oddsFormat=american&markets=spreads&apiKey=7016872381cf91ff6bd37f4ec388ae9b'
    fetch(url)
        .then((res) => res.json())
        .then((json) => {
          setMlbSpread(json)
        })
        .catch(console.error)
  }, [])

//---------totals fetch request --------------
  const [mlbTotals, setMlbTotals] = useState([])
    useEffect(() => {
      const url = 'https://api.the-odds-api.com/v4/sports/baseball_mlb/odds/?regions=us&oddsFormat=american&markets=totals&apiKey=7016872381cf91ff6bd37f4ec388ae9b'
      fetch(url)
          .then((res) => res.json())
          .then((json) => {
            setMlbTotals(json)
          })
          .catch(console.error)
    }, [])

//---------moneyline fetch request --------------
  const [mlbMoneyline, setMlbMoneyline] = useState([])
  useEffect(() => {
    const url = 'https://api.the-odds-api.com/v4/sports/baseball_mlb/odds/?regions=us&oddsFormat=american&markets=h2h&apiKey=7016872381cf91ff6bd37f4ec388ae9b'
    fetch(url)
        .then((res) => res.json())
        .then((json) => {
          setMlbMoneyline(json)
        })
        .catch(console.error)
  }, [])

  if (!mlbSpread, !mlbTotals, !mlbMoneyline) {
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
          {`${mlbLogo} | MLB`}
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

export default MLB;

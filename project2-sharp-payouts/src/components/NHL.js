import React, { useState, useEffect } from 'react';
import { Nav, NavItem, NavLink, Table } from 'reactstrap'


const NHL = () => {
  const nhlLogo = require("https://1000logos.net/wp-content/uploads/2017/05/NHL-emblem-500x450.jpg").default

  //---------spread fetch request --------------
  const [nhlSpread, setNhlSpread] = useState([])
  useEffect(() => {
    const url = 'https://api.the-odds-api.com/v4/sports/icehockey_nhl/odds/?regions=us&oddsFormat=american&markets=spreads&apiKey=7016872381cf91ff6bd37f4ec388ae9b'
    fetch(url)
        .then((res) => res.json())
        .then((json) => {
          setNhlSpread(json)
        })
        .catch(console.error)
  }, [])

//---------totals fetch request --------------
  const [nhlTotals, setNhlTotals] = useState([])
    useEffect(() => {
      const url = 'https://api.the-odds-api.com/v4/sports/icehockey_nhl/odds/?regions=us&oddsFormat=american&markets=totals&apiKey=7016872381cf91ff6bd37f4ec388ae9b'
      fetch(url)
          .then((res) => res.json())
          .then((json) => {
            setNhlTotals(json)
          })
          .catch(console.error)
    }, [])

//---------moneyline fetch request --------------
  const [nhlMoneyline, setNhlMoneyline] = useState([])
  useEffect(() => {
    const url = 'https://api.the-odds-api.com/v4/sports/icehockey_nhl/odds/?regions=us&oddsFormat=american&markets=h2h&apiKey=7016872381cf91ff6bd37f4ec388ae9b'
    fetch(url)
        .then((res) => res.json())
        .then((json) => {
          setNhlMoneyline(json)
        })
        .catch(console.error)
  }, [])

  if (!nhlSpread, !nhlTotals, !nhlMoneyline) {
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

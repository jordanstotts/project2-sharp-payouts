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
                <td>
                { nhlSpread.map(matchup => {
                  return (
                      <div>
                        <th scope="row">
                          <div>
                            <p>{ matchup.home_team }</p> 
                            <br/>
                            <p>{ matchup.away_team }</p>
                          </div>
                        </th>
                      </div>
                  )
                })}
                </td>
                <td>
                  { nhlSpread.map(spread => {
                    return (
                      <div>
                        <td>
                          <div>
                            <p>{ spread.bookmakers[0].markets[0].outcomes[0].point }</p><p>{ spread.bookmakers[0].markets[0].outcomes[0].price }</p>
                          </div>
                          <div>
                            <p>{ spread.bookmakers[0].markets[0].outcomes[1].point }</p><p>{ spread.bookmakers[0].markets[0].outcomes[1].price }</p>
                          </div>
                        </td>
                      </div>
                    )
                  })}
                </td>
                  <td>
                  { nhlTotals.map(totals => {
                    return (
                      <div>
                        <td>
                          <div>
                            <p>{ totals.bookmakers[1].markets[0].outcomes[0].point }</p><p>{ totals.bookmakers[1].markets[0].outcomes[0].price }</p>
                          </div>
                          <div>
                            <p>{ totals.bookmakers[1].markets[0].outcomes[1].point }</p><p>{ totals.bookmakers[1].markets[0].outcomes[1].price }</p>
                          </div>
                        </td>
                      </div>
                    )
                  })}
                  </td>
                  <td>
                  { nhlMoneyline.map(moneyline => {
                    return (
                      <div>
                        <td>
                          <div>
                            <p>{ moneyline.bookmakers[1].markets[0].outcomes[0].point }</p><p>{ moneyline.bookmakers[1].markets[0].outcomes[0].price }</p>
                          </div>
                          <div>
                            <p>{ moneyline.bookmakers[1].markets[0].outcomes[1].point }</p><p>{ moneyline.bookmakers[1].markets[0].outcomes[1].price }</p>
                          </div>
                        </td>
                      </div>
                    )
                  })}
                  </td>
              </tr>
            </tbody>
        </Table> 
      </div>
  )
};

export default NHL;

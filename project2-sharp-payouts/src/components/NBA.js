import React, { useState, useEffect }from 'react';
import { Nav, NavItem, NavLink, Table } from 'reactstrap'



const NBA = () => { 
  const nbaLogo = require("https://blog.logomyway.com/wp-content/uploads/2017/01/nba-logo-design.jpg").default
  
//---------spread fetch request --------------
  const [nbaSpread, setNbaSpread] = useState([])
  useEffect(() => {
    const url = 'https://api.the-odds-api.com/v4/sports/basketball_nba/odds/?regions=us&oddsFormat=american&markets=spreads&apiKey=7016872381cf91ff6bd37f4ec388ae9b'
    fetch(url)
        .then((res) => res.json())
        .then((json) => {
          setNbaSpread(json)
        })
        .catch(console.error)
  }, [])
console.log(nbaSpread)
//---------totals fetch request --------------
  const [nbaTotals, setNbaTotals] = useState([])
    useEffect(() => {
      const url = 'https://api.the-odds-api.com/v4/sports/basketball_nba/odds/?regions=us&oddsFormat=american&markets=totals&apiKey=7016872381cf91ff6bd37f4ec388ae9b'
      fetch(url)
          .then((res) => res.json())
          .then((json) => {
            setNbaTotals(json)
          })
          .catch(console.error)
    }, [])

//---------moneyline fetch request --------------
  const [nbaMoneyline, setNbaMoneyline] = useState([])
  useEffect(() => {
    const url = 'https://api.the-odds-api.com/v4/sports/basketball_nba/odds/?regions=us&oddsFormat=american&markets=h2h&apiKey=7016872381cf91ff6bd37f4ec388ae9b'
    fetch(url)
        .then((res) => res.json())
        .then((json) => {
          setNbaMoneyline(json)
        })
        .catch(console.error)
  }, [])

  if (!nbaSpread, !nbaTotals, !nbaMoneyline) {
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
                  { nbaSpread.map(matchup => {
                    return (
                      <div>
                        <th scope="row"> 
                          <div>
                            {/* <p>{ matchup.home_team } vs { matchup.away_team }</p> */}
                          </div>
                        </th>
                        <td>
                          <div>
                            {/* <p>{ matchup.bookmakers[0].markets[0].outcomes[0].point }</p> */}
                          </div>
                        </td>
                      </div>
                    )
                  })}
              </tr>
            </tbody>
        </Table> 
      </div>
  )
};

export default NBA;
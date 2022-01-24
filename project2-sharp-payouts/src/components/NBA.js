import React, { useState, useEffect }from 'react';
import { Nav, NavItem, NavLink, Table } from 'reactstrap'



const NBA = () => { 
  
//---------spread fetch request --------------
  const [nbaSpread, setNbaSpread] = useState([])
  useEffect(() => {
    const url = 'https://api.the-odds-api.com/v4/sports/basketball_nba/odds/?regions=us&oddsFormat=american&markets=spreads&apiKey=944e95fe3418a127a25971b3eff10031'
    fetch(url)
        .then((res) => res.json())
        .then((json) => {
          setNbaSpread(json)
        })
        .catch(console.error)
  }, [])
//---------totals fetch request --------------
  const [nbaTotals, setNbaTotals] = useState([])
    useEffect(() => {
      const url = 'https://api.the-odds-api.com/v4/sports/basketball_nba/odds/?regions=us&oddsFormat=american&markets=totals&apiKey=944e95fe3418a127a25971b3eff10031'
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
    const url = 'https://api.the-odds-api.com/v4/sports/basketball_nba/odds/?regions=us&oddsFormat=american&markets=h2h&apiKey=944e95fe3418a127a25971b3eff10031'
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

//----------------current date -----------------
  const current = new Date();
  const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;

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
          <img></img> | NBA
        </div>


        <Table hover>
            <thead>
              <tr>
                <th>
                  { date }
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
                { nbaSpread.map(matchup => {
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
                  { nbaSpread.map(spread => {
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
                  { nbaTotals.map(totals => {
                    return (
                      <div>
                        <td>
                          <div>
                            <p>{ totals.bookmakers[0].markets[0].outcomes[0].point }</p><p>{ totals.bookmakers[0].markets[0].outcomes[0].price }</p>
                          </div>
                          <div>
                            <p>{ totals.bookmakers[0].markets[0].outcomes[1].point }</p><p>{ totals.bookmakers[0].markets[0].outcomes[1].price }</p>
                          </div>
                        </td>
                      </div>
                    )
                  })}
                  </td>
                  <td>
                  { nbaMoneyline.map(moneyline => {
                    return (
                      <div>
                        <td>
                          <div>
                            <p>{ moneyline.bookmakers[0].markets[0].outcomes[0].point }</p><p>{ moneyline.bookmakers[0].markets[0].outcomes[0].price }</p>
                          </div>
                          <div>
                            <p>{ moneyline.bookmakers[0].markets[0].outcomes[1].point }</p><p>{ moneyline.bookmakers[0].markets[0].outcomes[1].price }</p>
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

export default NBA;
import React, { useState, useEffect } from 'react';
import { Nav, NavItem, NavLink, Table } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const NHL = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;

  //---------spread fetch request --------------
  const [nhlSpread, setNhlSpread] = useState([])
  useEffect(() => {
    const url = `https://api.the-odds-api.com/v4/sports/icehockey_nhl/odds/?regions=us&oddsFormat=american&markets=spreads&apiKey=${API_KEY}`
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
      const url = `https://api.the-odds-api.com/v4/sports/icehockey_nhl/odds/?regions=us&oddsFormat=american&markets=totals&apiKey=${API_KEY}`
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
    const url = `https://api.the-odds-api.com/v4/sports/icehockey_nhl/odds/?regions=us&oddsFormat=american&markets=h2h&apiKey=${API_KEY}`
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

  //----------------current date -----------------
  const current = new Date();
  const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;

  return (
    <div>
      <Nav className='navbar'>
          <NavItem className='homepage-link'>
            <NavLink active href={"/"}>Sharp Payouts</NavLink>
          </NavItem>
        <div className='league-links'>  
          <NavItem>
            <NavLink active href={"/NBA"}>
              <button className='nba-link'>NBA</button>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink active href={"/NFL"}>
              <button className='nfl-link'>NFL</button>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink active href={"/MLB"}>
              <button className='mlb-link'>MLB</button>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink active href={"/NHL"}>
              <button className='nhl-link'>NHL</button>
            </NavLink>
          </NavItem>
        </div>
        </Nav>

        <div className='current-league'>
          <div className='nhl-logo'></div>
          <p className='league-name'>NHL</p> 
        </div>


        <Table hover>
            <thead>
              <tr>
                <th className='games-header'>
                  Games
                  {/* { date } */}
                </th>
                <th className='spread-header'>
                  Spread
                </th>
                <th className='total-header'>
                  Total
                </th>
                <th className='moneyline-header'>
                  Moneyline
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='matchup'>
                { nhlSpread.map(matchup => {
                  return (
                      <div>
                        <th scope="row">
                            <p className='team'>{ matchup.home_team }</p> <p className='vs'>vs</p>
                            <br/>
                            <p className='team'>{ matchup.away_team }</p>
                        </th>
                      </div>
                  )
                })}
                </td>
                <td className='spread'>
                  { nhlSpread.map(spread => {
                    return (
                      <div>
                        <td>
                          <div className='spread-odds'>
                            <p>{ spread.bookmakers[0].markets[0].outcomes[0].point}</p><p>{ spread.bookmakers[0].markets[0].outcomes[0].price }</p>
                          </div>
                          <div>
                            <p>{ spread.bookmakers[0].markets[0].outcomes[1].point }</p><p>{ spread.bookmakers[0].markets[0].outcomes[1].price }</p>
                          </div>
                        </td>
                      </div>
                    )
                  })}
                </td>
                  <td className='total'>
                  { nhlTotals.map(totals => {
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
                  <td className='moneyline'>
                  { nhlMoneyline.map(moneyline => {
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

export default NHL;

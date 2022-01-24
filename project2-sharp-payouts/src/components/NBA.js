import React, { useState, useEffect }from 'react';
import { Container, Nav, NavItem, NavLink, Table } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const NBA = () => { 
  const API_KEY = process.env.REACT_APP_API_KEY;

//---------spread fetch request --------------
  // const [nbaSpread, setNbaSpread] = useState([])
  // useEffect(() => {
  //   const url = `https://api.the-odds-api.com/v4/sports/basketball_nba/odds/?regions=us&oddsFormat=american&markets=spreads&apiKey=${API_KEY}`
  //   fetch(url)
  //       .then((res) => res.json())
  //       .then((json) => {
  //         setNbaSpread(json)
  //       })
  //       .catch(console.error)
  // }, [])
//---------totals fetch request --------------
  // const [nbaTotals, setNbaTotals] = useState([])
  //   useEffect(() => {
  //     const url = `https://api.the-odds-api.com/v4/sports/basketball_nba/odds/?regions=us&oddsFormat=american&markets=totals&apiKey=${API_KEY}`
  //     fetch(url)
  //         .then((res) => res.json())
  //         .then((json) => {
  //           setNbaTotals(json)
  //         })
  //         .catch(console.error)
  //   }, [])

//---------moneyline fetch request --------------
  // const [nbaMoneyline, setNbaMoneyline] = useState([])
  // useEffect(() => {
  //   const url = `https://api.the-odds-api.com/v4/sports/basketball_nba/odds/?regions=us&oddsFormat=american&markets=h2h&apiKey=${API_KEY}`
  //   fetch(url)
  //       .then((res) => res.json())
  //       .then((json) => {
  //         setNbaMoneyline(json)
  //       })
  //       .catch(console.error)
  // }, [])

  // if (!nbaSpread, !nbaTotals, !nbaMoneyline) {
  //   return <p>Loading current odds ...</p>
  // }

//----------------current date -----------------
  const current = new Date();
  const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;

  return (
    <div>
      <Nav className='navbar'>
          <NavItem>
          <NavLink active href={"/"}>Sharp Payouts</NavLink>
          </NavItem>
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
                <th className='date-header'>
                  { date }
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
                {/* { nbaSpread.map(matchup => {
                  return ( */}
                      <div>
                        <th scope="row">
                            <p>Team 1</p>
                            {/* <p>{ matchup.home_team }</p>  */}
                            <br/>
                            <p>Team 2</p>
                            {/* <p>{ matchup.away_team }</p> */}
                        </th>
                      </div>
                  {/* )
                })} */}
                </td>
                <td className='spread'>
                  {/* { nbaSpread.map(spread => {
                    return ( */}
                      <div>
                        <td>
                          <div>
                            <p className='home-spread'>1.5    -125</p>
                            {/* <p>{ spread.bookmakers[0].markets[0].outcomes[0].point }</p><p>{ spread.bookmakers[0].markets[0].outcomes[0].price }</p> */}
                          </div>
                          <div>
                            <p className='away-spread'>-1.5   100</p>
                            {/* <p>{ spread.bookmakers[0].markets[0].outcomes[1].point }</p><p>{ spread.bookmakers[0].markets[0].outcomes[1].price }</p> */}
                          </div>
                        </td>
                      </div>
                    {/* )
                  })} */}
                </td>
                  <td className='total'>
                  {/* { nbaTotals.map(totals => {
                    return ( */}
                      <div>
                        <td>
                          <div>
                            <p>5.5    -120</p>
                            {/* <p>{ totals.bookmakers[0].markets[0].outcomes[0].point }</p><p>{ totals.bookmakers[0].markets[0].outcomes[0].price }</p> */}
                          </div>
                          <div>
                            <p>-5.5   -105</p>
                            {/* <p>{ totals.bookmakers[0].markets[0].outcomes[1].point }</p><p>{ totals.bookmakers[0].markets[0].outcomes[1].price }</p> */}
                          </div>
                        </td>
                      </div>
                    {/* )
                  })} */}
                  </td>
                  <td className='moneyline'>
                  {/* { nbaMoneyline.map(moneyline => {
                    return ( */}
                      <div>
                        <td>
                          <div>
                            <p>205</p>
                            {/* <p>{ moneyline.bookmakers[0].markets[0].outcomes[0].point }</p><p>{ moneyline.bookmakers[0].markets[0].outcomes[0].price }</p> */}
                          </div>
                          <div>
                            <p>-278</p>
                            {/* <p>{ moneyline.bookmakers[0].markets[0].outcomes[1].point }</p><p>{ moneyline.bookmakers[0].markets[0].outcomes[1].price }</p> */}
                          </div>
                        </td>
                      </div>
                    {/* )
                  })} */}
                  </td>
              </tr>
            </tbody>
        </Table>
      </div>
  )
};

export default NBA;
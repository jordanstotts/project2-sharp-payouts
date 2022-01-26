import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'

const About = () => {
  return (
    <div>
      <Nav className='navbar'>
        <NavItem className='homepage-link'>
          <NavLink active href={ "/" }>Sharp Payouts</NavLink>
        </NavItem>
        <div className='league-links'>  
          <NavItem>
            <NavLink active href={ "/NBA" }>
              <button className='nba-link'>NBA</button>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink active href={ "/NFL" }>
              <button className='nfl-link'>NFL</button>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink active href={ "/MLB" }>
              <button className='mlb-link'>MLB</button>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink active href={ "/NHL" }>
              <button className='nhl-link'>NHL</button>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink active href={ "/About" }>
              <button className='about-link'>About</button>
            </NavLink>
          </NavItem>
        </div>
      </Nav>

      <h1 className='about-header'>Common Terms Explained</h1>
      <div className='terms'>
        <h3>Spread</h3>
        <p><i>A number created for every betting matchup; the goal is to have an equal amount bet on each side.</i></p> <p>This is the bettor's answer to “how many points would you have to spot this bad team in order for them to beat a better team?” Let's say the favorite in an NFL game is favored to win by a touchdown; they'd have a -7 distinction on the betting line. Their opponent, the underdog, would be listed at +7. Since whole numbers leave the possibility for ties, most spreads end in .5 even though there's no way to score half a point in most sports. In our scenario, the favorite would be listed at -7.5. That means they'd have to win by at least eight points to cash that bet. Betting the underdog at +7.5 means they could still lose on the scoreboard but win at the sportsbook, but only if the final margin is fewer than eight points. That's called covering the spread. Great teams do it.</p>
        <h2>Total (over/under)</h2>
        <p><i>Betting the amount of points scored.</i></p> <p>Another simple mechanism. The total is the projected total amount of points, goals, runs, etc., scored in a game. Bet the under if you think the final score will be less than that number. Bet the over if you think the final score will be more. Both sides will have a money line attached, though they won't vary nearly as wildly as the money lines for picking winners and losers. The over is the only bet you can cash before the game goes final if the score exceeding the total before the final whistle. The under is a little more low key, but a vital tool if you're a believer in defense.</p>
        <h2>Moneyline</h2>
        <p><i>The profit you'd return for betting on straight up wins and losses.</i></p> <p>Betting the money line is less common since the odds for the favorite are less profitable than the spread. The money line for each team is a three-digit number. For favorites, it tells you how much you'd need to bet in order to win $100. A -400 favorite means you'd have to plunk down $400 to make a $100 profit in victory — much worse odds, but you also don't have to worry about the spread. The number is different for the underdog; it's an indicator of how much you'd win with a $100 bet. A +350 line means not many people think the underdog has a chance, but if they pull it off you'd pocket an extra $350 for your faith. Like in horseshoes and hand grenades, “close” doesn't count; you've gotta win the game outright.</p>
        <p>Source: <a href="https://ftw.usatoday.com/2021/09/understanding-basics-sports-betting-lines-spread-total">Sports Betting 101</a></p>
      </div>    
    </div>
  )
}

export default About
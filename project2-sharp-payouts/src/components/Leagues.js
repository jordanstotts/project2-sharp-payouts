import React from 'react';
import { CardGroup, Card, CardImg, CardBody, CardTitle } from 'reactstrap'
import { Link } from 'react-router-dom'
import 'animate.css';


const Leagues = () => {
  return (
      <div>
        <header class="animate__animated animate__backInUp">
            <h1 className='homepage-header'>Sharp Payouts</h1>
        </header>
        <div class="animate__animated animate__backInUp">
            <p className='homepage-header-caption'>Spreads, Totals, and Moneyline odds</p>
        </div>       
        <CardGroup className='leagues'>
            <Link className='card-link' to={ "/NBA" }>
                <div>
                <Card className='nba'>
                    <CardImg className='homepage-logos' alt="nba logo" src="https://blog.logomyway.com/wp-content/uploads/2017/01/nba-logo-design.jpg" top width="100%"/>
                    <CardBody className='nba-card-body'>
                        <CardTitle className='nba-title' tag="h5">NBA</CardTitle>
                    </CardBody>
                </Card>
                </div>
            </Link>
            <Link className='card-link' to={ "/NFL" }>
            <div>
            <Card className='nfl'>
                <CardImg className='homepage-logos' alt="nfl logo" src="https://i0.wp.com/sportytell.com/wp-content/uploads/2020/11/NFL-Team-Logos.jpg?resize=680%2C350&ssl=1" top width="100%"/>
                <CardBody className='nfl-card-body'>
                    <CardTitle className='nfl-title' tag="h5">NFL</CardTitle>
                </CardBody>
            </Card>
            </div>
            </Link>
            <Link className='card-link' to={ "/MLB" }>
            <div>
            <Card className='mlb'>
                <CardImg className='homepage-logos' alt="mlb logo" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Major_League_Baseball_logo.svg/1920px-Major_League_Baseball_logo.svg.png" top width="100%"/>
                <CardBody className='mlb-card-body'>
                    <CardTitle className='mlb-title' tag="h5">MLB</CardTitle>
                </CardBody>
            </Card>
            </div>
            </Link>
            <Link className='card-link' to={ "/NHL" }>
            <div>
            <Card className='nhl'>
                <CardImg className='homepage-logos' alt="nhl logo" src="https://1000logos.net/wp-content/uploads/2017/05/NHL-emblem-500x450.jpg" top width="100%"/>
                <CardBody className='nhl-card-body'>
                    <CardTitle className='nhl-title' tag="h5">NFL</CardTitle>
                </CardBody>
            </Card>
            </div>
            </Link> 
        </CardGroup>
    </div>
    )
};

export default Leagues;

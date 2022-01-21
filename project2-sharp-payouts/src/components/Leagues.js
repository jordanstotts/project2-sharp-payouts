import React from 'react';
import NBA from './NBA';
import NFL from './NFL';
import MLB from './MLB';
import NHL from './NHL';
import { CardGroup, Card, CardImg, CardBody, CardTitle } from 'reactstrap'
import { Link,  } from 'react-router-dom'


const Leagues = () => {
  return (
        <CardGroup className='leagues'>
            <Link to={ "/NBA" }>
                <div>
                <Card className='nba'>
                    <CardImg alt="nba logo" src="https://blog.logomyway.com/wp-content/uploads/2017/01/nba-logo-design.jpg" top width="100%"/>
                    <CardBody>
                        <CardTitle tag="h5">NBA</CardTitle>
                    </CardBody>
                </Card>
                </div>
            </Link>
            <Link to={ "/NFL" }>
            <div>
            <Card className='nfl'>
                <CardImg alt="nfl logo" src="https://i0.wp.com/sportytell.com/wp-content/uploads/2020/11/NFL-Team-Logos.jpg?resize=680%2C350&ssl=1" top width="100%"/>
                <CardBody>
                    <CardTitle tag="h5">NFL</CardTitle>
                </CardBody>
            </Card>
            </div>
            </Link>
            <Link to={ "/MLB" }>
            <div>
            <Card className='mlb'>
                <CardImg alt="mlb logo" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Major_League_Baseball_logo.svg/1920px-Major_League_Baseball_logo.svg.png" top width="100%"/>
                <CardBody>
                    <CardTitle tag="h5">MLB</CardTitle>
                </CardBody>
            </Card>
            </div>
            </Link>
            <Link to={ "/NHL" }>
            <div>
            <Card className='nhl'>
                <CardImg alt="nhl logo" src="https://1000logos.net/wp-content/uploads/2017/05/NHL-emblem-500x450.jpg" top width="100%"/>
                <CardBody>
                    <CardTitle tag="h5">NFL</CardTitle>
                </CardBody>
            </Card>
            </div>
            </Link> 
        </CardGroup>
    )
};

export default Leagues;

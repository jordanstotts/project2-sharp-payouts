import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NBA from './components/NBA';
import NFL from './components/NFL';
import MLB from './components/MLB';
import NHL from './components/NHL';
import { CardGroup, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'


function App() {
  return (
    <div className="App">
      <header>
        Sharp Payouts
      </header>
      <CardGroup>
        <Card className='nba'>
          <CardImg alt="nba logo" src="https://blog.logomyway.com/wp-content/uploads/2017/01/nba-logo-design.jpg" top width="100%"/>
          <CardBody>
            <CardTitle tag="h5">NBA</CardTitle>
            <Button>Show todays lines</Button>
          </CardBody>
        </Card>
        <Card className='nfl'>
          <CardImg alt="nfl logo" src="https://i0.wp.com/sportytell.com/wp-content/uploads/2020/11/NFL-Team-Logos.jpg?resize=680%2C350&ssl=1" top width="100%"/>
          <CardBody>
            <CardTitle tag="h5">NFL</CardTitle>
            <Button>Show todays lines</Button>
          </CardBody>
        </Card>
        <Card className='MLB'>
          <CardImg alt="mlb logo" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Major_League_Baseball_logo.svg/1920px-Major_League_Baseball_logo.svg.png" top width="100%"/>
          <CardBody>
            <CardTitle tag="h5">MLB</CardTitle>
            <Button>Show todays lines</Button>
          </CardBody>
        </Card>
        <Card className='nhl'>
          <CardImg alt="nhl logo" src="https://1000logos.net/wp-content/uploads/2017/05/NHL-emblem-500x450.jpg" top width="100%"/>
          <CardBody>
            <CardTitle tag="h5">NHL</CardTitle>
            <Button>Show todays lines</Button>
          </CardBody>
        </Card>
      </CardGroup>
    </div>
  );
}

export default App;

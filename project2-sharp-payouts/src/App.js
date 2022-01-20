import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Leagues from './components/Leagues';
import NBA from './components/NBA';
import NFL from './components/NFL';
import MLB from './components/MLB';
import NHL from './components/NHL';
import { Route, Routes } from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <header>
        <h1>
          <a href="/">Sharp Payouts</a>
        </h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={ <Leagues />} />
          <Route path="/NBA" elemetn={ <NBA />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

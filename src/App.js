import './App.css'
import Leagues from './components/Leagues'
import NBA from './components/NBA'
import NFL from './components/NFL'
import MLB from './components/MLB'
import NHL from './components/NHL'
import About from './components/About'
import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="app">
      <main className='homepage'>
        <Routes>
          <Route path="/" element={ <Leagues /> } />
          <Route path="/NBA" element={ <NBA /> } />
          <Route path="/NFL" element={ <NFL /> } />
          <Route path="/MLB" element={ <MLB /> } />
          <Route path="/NHL" element={ <NHL /> } />
          <Route path="/About" element={ <About /> } />
        </Routes>
      </main>
    </div>
  )
  }

export default App
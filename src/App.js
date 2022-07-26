import './App.css';
import { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './Pages/Home/home.jsx'
import { Donations } from './Pages/Donations/donations.jsx'

class App extends Component {
  constructor() {
    super();

    this.state = {
    }
  }

  render() {
    return (
      <div>
        <Router>
          <Routes>
            <Route path='/' element={ <HomePage/> } />
            <Route path='/donations' element={ <Donations/> } />
          </Routes>
        </Router>
      </div>
    );
  }

}

export default App;
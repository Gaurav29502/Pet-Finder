import './App.css';
import { Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './Pages/Home/home.jsx'
import { PetCare } from './Pages/Pet_Care/petcare.jsx'

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
            <Route path='/home' element={<HomePage />} />
            <Route path='/petcare' element={<PetCare />} />
          </Routes>
        </Router>
      </div>
    );
  }

}

export default App;
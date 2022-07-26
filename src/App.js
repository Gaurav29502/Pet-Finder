import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './Pages/Home/home.jsx'
import { Donations } from './Pages/Donations/donations.jsx'
import {PetCare} from './Pages/Pet_Care/petcare.jsx'
import KommunicateChat from './chat';
import {Track} from './Pages/Track/track.jsx'

import {Comments} from './Pages/Community/Comments.jsx'

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
            <Route path='/home' element={<HomePage />} />
            <Route path='/petcare' element={<PetCare />} />
            <Route path='/track' element={<Track />} />
            <Route path='/comments' element={<Comments />} />
          </Routes>
        </Router>
      </div> 
    );
  }

}

export default App;
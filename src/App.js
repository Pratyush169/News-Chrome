import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <div>
            <Navbar />
            <News pagesize={9} country="in" key="general" category="general" />
            <Routes>
              <Route path="/" element={<News pagesize={9} country="in" key="general" category="general" />} />
              {/* <Route path="/About" element={<News pagesize={9} country="in" key="general" category="general" />}/> */}
              <Route path="/Business" element={<News pagesize={9} country="in" key="business" category="business" />} />
              <Route path="/Entertainment" element={<News pagesize={9} country="in" key="entertainment" category="entertainment" />} />
              <Route path="/General" element={<News pagesize={9} country="in" key="general" category="general" />} />
              <Route path="/Health" element={<News pagesize={9} country="in" key="health" category="health" />} />
              <Route path="/Sports" element={<News pagesize={9} country="in" key="sports" category="sports" />} />
              <Route path="/Science" element={<News pagesize={9} country="in" key="science" category="science" />} />
              <Route path="/Technology" element={<News pagesize={9} country="in" key="technology" category="technology" />} />
            </Routes>
          </div>
        </Router>
      </>
    )
  }
}


import React from 'react';
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { NavigationBar } from './Navbar';
// import { Nav} from 'react-bootstrap';


const App=()=> {
    return (
      <div>
        <Router>
        <NavigationBar/>
          <Routes>
              <Route path="/home" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/contact" element={<Contact/>} />
              </Routes>
        </Router>
      </div>
    );
}

export default App
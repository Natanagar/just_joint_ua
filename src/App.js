import React from 'react';
import { Router } from '@reach/router';
import { Footer } from './components/Footer/Footer';
import { Navigation } from './components/Navigation/Navigation';
import { Main } from './components/Main/Main';
import { Employer } from './components/Employer/Employer';
import { Employee } from './components/Employee/Employee';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Router>
        <Main path="/" />
        <Employer path="company" />
        <Employee path="hiring" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;

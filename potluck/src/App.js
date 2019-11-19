import React from 'react';
import './App.css';
import FormikLogin from './components/onboarding/LoginForm';
import {Route} from "react-router-dom"
import NavBar from "./components/onboarding/Nav"


function App() {
  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
      <Route path="/" exact component={FormikLogin} />
      </header>
    </div>
  );
}

export default App;

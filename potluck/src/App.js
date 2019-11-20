import React from 'react';
import './App.css';
import FormikLogin from './components/onboarding/LoginForm';
import {Route} from "react-router-dom"
import NavBar from "./components/onboarding/Nav"
import FormikOrganizer from './components/onboarding/Organizer';
import FormikRegister from './components/onboarding/RegisterForm';

function App() {
  return (
    <div className="App">

      <NavBar/>
      <header className="App-header">
      <Route path="/" exact component={FormikOrganizer}/>
      <Route path="/LoginForm" exact component={FormikLogin} />
      <Route path="/RegisterForm" exact component={FormikRegister} />
      </header>



    </div>
  );
}

export default App;

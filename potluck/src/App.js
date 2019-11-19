import React from 'react';
import './App.css';
import FormikLogin from './components/onboarding/LoginForm';
import {Route} from "react-router-dom"
import NavBar from "./components/onboarding/Nav"
import FormikOraginzer from './components/onboarding/Organizer';

import RegisterForm from './components/onboarding/RegisterForm';

function App() {
  return (
    <div className="App">

      <NavBar/>
      <header className="App-header">
      <Route path="/" exact component={FormikOraginzer}/>
      <Route path="/LoginForm" exact component={FormikLogin} />
      </header>

      <RegisterForm/>

    </div>
  );
}

export default App;

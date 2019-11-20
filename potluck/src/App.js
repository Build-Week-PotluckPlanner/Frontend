import React from 'react';
import './App.css';
import LoginForm from './components/onboarding/LoginForm';
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom"
import NavBar from "./components/onboarding/Nav"
import FormikLogin from './components/onboarding/LoginForm'

import RegisterForm from './components/onboarding/RegisterForm';

const PrivateRoute = ({component: Component, ...rest}) => {
  return <Route {...rest} render={props => {
    if (localStorage.getItem('token')) {
      return <Component {...props} />;
    } else {
      return <Redirect to="/login" />;
    }
  }} />;
};

function App() {
  return (
    <div className="App">

      <NavBar/>
      {/* <header className="App-header"> */}
      <Route path="/" exact component={FormikLogin} />
      <Route path='/login' component={LoginForm} />
      <Route path='/register' component={RegisterForm} />
      {/* </header> */}


    </div>
  );
}

export default App;

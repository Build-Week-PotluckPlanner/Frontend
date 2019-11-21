import React from 'react';
import './App.css';
import LoginForm from './components/onboarding/LoginForm';
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom"
import NavBar from "./components/onboarding/Nav"
import FormikLogin from './components/onboarding/LoginForm'
import RegisterForm from './components/onboarding/RegisterForm';
import FormikOrganizer from './components/onboarding/Organizer';
// import UsersPotLucks from './components/onboarding/UsersPotLucks';

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
      <PrivateRoute path="/" exact component={FormikLogin} />
      <PrivateRoute path='/dashboard' component={FormikOrganizer} />
      <Route path='/LoginForm' component={LoginForm} />
      <Route path='/RegisterForm' component={RegisterForm} />
      {/* <Route path='/UsersPotLucks' component={UsersPotLucks}/> */}
      {/* </header> */}


    </div>
  );
}

export default App;

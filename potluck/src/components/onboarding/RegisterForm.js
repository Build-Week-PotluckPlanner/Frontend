import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {BrowserRouter as Router, Link} from "react-router-dom";
import { render } from 'react-dom';
import styled from "styled-components";

const StyledForm = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
`;

const Button = styled.button`
width: 100px;
height: 25px;
border-radius: 10px;
margin: 2%;`;

const Register = ({ errors, touched, status}) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    status && setUsers(users => [...users, status]);
  }, [status]);

  return (
    <div>
      <Form>
        <h1>Registration Form</h1>
        <br></br>
        <Field type="text" name="firstName" placeholder="First Name" />
        {touched.name && errors.name && <p className="errors">{errors.name}</p>}
        <br></br>
        <Field type="text" name="lastName" placeholder="Last Name" />
        {touched.name && errors.name && <p className="errors">{errors.name}</p>}
        <br></br>
        <Field type="text" name="username" placeholder="Username" />
        {touched.name && errors.name && <p className="errors">{errors.name}</p>}
        <br></br>
        <Field type="password" name="password" placeholder="Password" />
        {touched.password && errors.password && <p className="errors">{errors.password}</p>}
        <br></br>
        <Link className="login" to = "./LoginForm">Login</Link>
        <br></br>
        <Button type="submit">Register</Button>
        
      </Form>

      
      {users.map(user => (
            
            <ul key="{user.id}">
              <li>First Name: {user.firstName}</li>
              <li>Last Name: {user.lastName}</li>
              <li>Username: {user.username}</li>
              <li>Password: {user.password}</li>
            </ul>
          ))}
    </div>
  );
};


const FormikRegister = withFormik({
  mapPropsToValues({ firstName, lastName, username, password }) {
    return {
      firstName: firstName || "",
      lastName: lastName || "",
      username: username || "",
      password: password || "",
    };
  },
  validationSchema: Yup.object().shape({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    username: Yup.string().required(),
    password: Yup.string().required()
  }),
  
  handleSubmit(values, props) {
    // values is our object with all our data on it
    axios
      .post("https://potluck-planner-backend.herokuapp.com/api/register", values)
      .then(res => {
            console.log('Here', res.data);
            localStorage.setItem('token', res.data.token)
            // console.log(props.props.history);
            props.props.history.push('/loginform')
            // setStatus(res.data);
      })
      .catch(err => console.log(err.response));
  }
})(Register);

export default FormikRegister;

render(<Router><FormikRegister /></Router>, document.getElementById('root') )
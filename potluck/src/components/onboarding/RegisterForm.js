import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

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
        
        
        <button>Submit</button>
      </Form>

     
       
      {/* This is where we display our post request */}
      {users.map(user => (
            
            <ul key="{user.id}">
              <li>Name: {user.firstName}</li>
              <li>Username: {user.username}</li>
              
            </ul>
          ))}
    </div>
  );
};


const FormikRegister = withFormik({
  mapPropsToValues({ firstName, lastName,username, password }) {
    return {
      name: firstName || "",
      name: lastName || "",
      name: username || "",
      password: password || "",
    };
  },
  validationSchema: Yup.object().shape({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    username: Yup.string().required(),
    password: Yup.string().required()
  }),
  handleSubmit(values, { setStatus }) {
    axios
      .post("https://potluck-planner-backend.herokuapp.com/api/register", values)
      .then(res => {
        setStatus(res.data);
        console.log(res);
      })
      .catch(err => console.log(err.response));
  }
})(Register);


export default FormikRegister;



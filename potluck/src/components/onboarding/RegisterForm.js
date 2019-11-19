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
        <Field type="text" name="name" placeholder="Name" />
        {touched.name && errors.name && <p className="errors">{errors.name}</p>}
        <br></br>
        <Field type="email" name="email" placeholder="Email" />
        {touched.email && errors.email && <p className="errors">{errors.email}</p>}
        <br></br>
        <Field type="password" name="password" placeholder="Password" />
        {touched.password && errors.password && <p className="errors">{errors.password}</p>}
        <br></br>
        
        
        <button>Submit!</button>
      </Form>

     
       
      {/* This is where we display our post request */}
      {users.map(user => (
            
            <ul key="{user.id}">
              <li>Name: {user.name}</li>
              <li>Email: {user.email}</li>
              
            </ul>
          ))}
    </div>
  );
};


const FormikRegister = withFormik({
  mapPropsToValues({ name, email, password }) {
    return {
      name: name || "",
      email: email || "",
      password: password || "",
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().required(),
    password: Yup.string().required()
  }),
  handleSubmit(values, { setStatus }) {
    // values is our object with all our data on it
    axios
      .post("https://reqres.in/api/users/", values)
      .then(res => {
        setStatus(res.data);
        console.log(res);
      })
      .catch(err => console.log(err.response));
  }
})(Register);


export default FormikRegister;




/*
function FormikRegisterForm({ errors, touched, isSubmitting }) {
  return (
    <Form>
      <div>
        {touched.name && errors.name && <p>{errors.password}</p>}
        <Field type="text" name="name" placeholder="Name" />
      </div>
      <div>
        {touched.email && errors.email && <p>{errors.email}</p>}
        <Field type="email" name="email" placeholder="Email" />
      </div>
      <div>
        {touched.password && errors.password && <p>{errors.password}</p>}
        <Field type="password" name="password" placeholder="Password" />
      </div>
      <button disabled={isSubmitting}>Submit</button>
    </Form>
  );
}

const RegisterForm = withFormik({
  mapPropsToValues({ name, email, password }) {
    return {
      name: email || "",
      email: email || "",
      password: password || "",
    
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .min(3, "Name must be 3 characters or longer")
      .required("Name is required"),
    email: Yup.string()
      .email("Email not valid")
      .required("Email is required"),
    password: Yup.string()
      .min(16, "Password must be 16 characters or longer")
      .required("Password is required")
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    if (values.email === "alreadytaken@atb.dev") {
      setErrors({ email: "That email is already taken" });
    } else {
      axios
        .post("#", values)
        .then(res => {
          console.log(res); // Data was created successfully and logs to console
          resetForm();
          setSubmitting(false);
        })
        .catch(err => {
          console.log(err); // There was an error creating the data and logs to console
          setSubmitting(false);
        });
    }
  }
})(FormikRegisterForm);

export default RegisterForm;

*/
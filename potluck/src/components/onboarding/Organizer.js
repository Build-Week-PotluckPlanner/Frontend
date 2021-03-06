import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components"
import { Link } from 'react-router-dom';
import axiosWithAuth from '../../utilities/AxiosWithAuth';
const Button = styled.button`
width: 100px
height: 35px
border-radius: 10px
margin: 2%
background: green
color: gold
box-shadow: none`;





const Organizer = ({ values, errors, touched, status }) => {
  const [person, setPerson] = useState([]);

  useEffect(() => {
    status && setPerson(person => [...person, status]);
  }, [status]);

  // const deleteInfo = id => {
  //   // console.log(id);
  //   axiosWithAuth().delete(`https://potluck-planner-backend.herokuapp.com/potlucks/${id}`)
  //       .then(res => {
  //       axiosWithAuth().get('https://potluck-planner-backend.herokuapp.com/potlucks')
  //       .then(res => {
  //           setInfo(res.data.posts);
  //           console.log('updating data');
  //         })
  //         .catch(err => console.log(err.response))
      
  //             })
  //     .catch(err => console.log(err.response));
  // }

  return (
    <div className="person-form">
        <h1>Create PotLuck</h1>

        <Form>
          <Field type="text" name="name" placeholder="Person Attending" />
          {touched.name && errors.name && (
            <p className="errors">{errors.name}</p>
          )}
          <Field type="text" name="date" placeholder="date" />
          {touched.date && errors.date && <p className="errors">{errors.date}</p>}
          
          <Field type="text" name="time" placeholder="time" />
          {touched.time && errors.time && <p className="errors">{errors.time}</p>}
          
          <Field type="text" name="location" placeholder="location" />
          {touched.location && errors.location && <p className="errors">{errors.location}</p>}
          
          {/* <Field as="select" className="food-select" name="item">
            <option>Please Choose an Option</option>
            <option value="Entree">Entree</option>
            <option value="Beverage">Beverage</option>
            <option value="Desert">Desert</option>
          </Field> */}
          <label className="checkbox-container">
            <h3>RSVP</h3>
            <Field
              type="checkbox"
              name="rsvp"
              checked={values.rsvp}
            />
            <span className="checkmark" />
          </label>
          {/* <Field as="textarea" type="text" name="notes" placeholder="what will be brought" /> */}
          <Button>Submit!</Button>
        </Form>

      {person.map(person => {
        return (

        <ul key={person.id}>
          <li>Name: {person.name}</li>
          <li>Date: {person.date}</li>
          <li>Time: {person.time}</li>
          <li>Location: {person.location}</li>
          {/* <li>Item: {person.item}</li>
          <li>Brings: {person.notes}</li> */}
          <Link to={`editform/${person.id}`}>Edit</Link>
          <button>Delete</button>
        </ul>
        )
      })};</div>)}

const FormikOrganizer = withFormik({
  mapPropsToValues({ name, date, time, location, item, rsvp, notes }) {
    return {
      name: name || "",
      date: date || "",
      time: time || "",

      location:  "",
      item: item || "",
      rsvp: rsvp || false,
      notes: notes || ""


    };
  },

  validationSchema: Yup.object().shape({
    name: Yup.string().required("Required Field"),
    date: Yup.string().required("Required Field")
  }),

  handleSubmit(values, { setStatus }) {
    // values is our object with all our data on it
    axiosWithAuth()
      .post("https://potluck-planner-backend.herokuapp.com/potlucks", values)
      .then(res => {
        setStatus(res.data);
        console.log(res);
      })
      .catch(err => console.log(err.response));
  }
})(Organizer);


export default FormikOrganizer;

// render(<Router><FormikOrganizer /></Router>, document.getElementById('root'))

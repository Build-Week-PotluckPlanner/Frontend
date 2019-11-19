import React, { useState, useEffect } from "react";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const Organizer = ({ values, errors, touched, status }) => {
  const [person, setPerson] = useState([]);

  useEffect(() => {
    status && setPerson(person => [...person, status]);
  }, [status]);

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
        <Field as="select" className="food-select" name="item">
          <option>Please Choose an Option</option>
          <option value="entree">Entree</option>
          <option value="beverage">Beverage</option>
          <option value="desert">Desert</option>
        </Field>
        <label className="checkbox-container">
          <h3>RSVP</h3>
          <Field
            type="checkbox"
            name="rsvp"
            checked={values.rsvp}
          />
          <span className="checkmark" />
        </label>
        <Field as="textarea" type="text" name="notes" placeholder="notes" />
        <button>Submit!</button>
      </Form>
      {person.map(person => (
        <ul key={person.id}>
          <li>Name: {person.name}</li>
          <li>Date: {person.date}</li>
          <li>Time: {person.time}</li>
          <li>Location: {person.location}</li>
        </ul>
      ))}
    </div>
  );
};
const FormikOraginzer = withFormik({
  mapPropsToValues({ name, date, time, location, rsvp, notes }) {
    return {
      name: name || "",
      date: date || "",
      time: time || "",
      location: location || "",
      rsvp: rsvp || false,
      notes: notes || ""
    };
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required(),
    date: Yup.string().required()
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
})(Organizer);
export default FormikOraginzer

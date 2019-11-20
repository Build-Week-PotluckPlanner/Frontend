import React, {useState, useEffect} from "react"
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components"
import {Link} from "react-router-dom"


const StyledForm = styled.div`
display: flex
flex-direction: column
align-items: center
justify-content: space-evenly
`;

const Button = styled.button`
width: 100px
height: 25px
border-radius: 10px
margin: 2%`;









const Login = ({values, errors, touched, status}) => {
    
    const [user, setUser] = useState([]);

    useEffect(() => {
        if (status) {
            setUser([...user, status])
        }
    }, [status]);


    


    return(
        <div>
            <h2>PotLuck Planner Login</h2>
            <Form>
                <StyledForm>
                    <label className="userinfo">Username
                    <Field type="text" name="name" placeholder="insert username"/>
                    {touched.name && errors.name && (<p className="error">{errors.name}</p>)}
                    </label>
                    <label className="userinfo">Password
                    <Field type="text" name="pw" placeholder="insert password"/>
                    {touched.pw && errors.pw && (<p className="error">{errors.pw}</p>)}
                    </label>
                    <Link className="register" to = "./RegisterForm">Register</Link>
                    <Button type="submit">Login</Button>        
                </StyledForm>
            </Form>

            {user.map(person => (
                <ul key={person.id}>
                    <li>Name: {person.name}</li>
                    <li>Password: {person.pw}</li>
                </ul>
            ))}

        </div>

    
    )
}

const FormikLogin = withFormik({
    mapPropsToValues({name, email, pw}){
        return{
            name: name || "",
            pw: pw || ""
        }
    },
    validationSchema: Yup.object().shape({
        name: Yup.string().required("Required field."),
        pw: Yup.string().required("Required field."),
    }),
    handleSubmit(values, { setStatus }) {
        axios
            .post("https://potluck-planner-backend.herokuapp.com/api/login", values)
            .then(response => {
                console.log(response);
                const token = response.data.token;
                localStorage.setItem("token", token)
                values.history.push("/dashboard")
                setStatus(response.data);
            })
            .catch(error => console.log(error.response));
    }
})(Login);




export default FormikLogin
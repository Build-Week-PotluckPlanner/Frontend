import React from "react";
import {Link} from "react-router-dom"
import styled from "styled-components"

const StyledForm = styled.div`
display:flex;
flex-direction: row;
justify-content: space-evenly;
background: lightyellow;
border-bottom 2px #282c34 solid;
`;

const Navigation = styled.div`
display:flex;
justify-content: space-evenly;
width: 45%;
align-items: center;
text-decoration: none;`;






const NavBar = () => {
    return (
            <StyledForm>
                <div>
                    <img src="https://build-week-potluckplanner.github.io/img/logo.png"></img>
                </div>
                <Navigation>
                    <a className="links" href="https://build-week-potluckplanner.github.io/">Marketing</a>
                    <Link className="links" to = "/dashboard">Dashboard</Link>
                    <a className="links" href = "https://build-week-potluckplanner.github.io/about.html">About Us</a>
                    <Link className="links" to = "/LoginForm">Login</Link>
                    <Link className="links" to = "/RegisterForm">Register</Link>
                    <Link className="links" to = "/PotluckData">Potlucks</Link>
                    
                </Navigation>
            </StyledForm>
    )
}
export default NavBar
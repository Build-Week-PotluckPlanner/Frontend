import React from "react";
import {Link} from "react-router-dom"
import styled from "styled-components"

const StyledForm = styled.div`
display:flex;
flex-direction: row;
justify-content: space-evenly;
background: lightyellow;
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
                    <Link className="links" to = "/">Dashboard</Link>
                    <Link className="links" to = "/about">About Us</Link>
                    <Link className="links" to = "/LoginForm">Login</Link>
                    <Link className="links" to = "/RegisterForm">Register</Link>
                </Navigation>
            </StyledForm>
    )
}
export default NavBar
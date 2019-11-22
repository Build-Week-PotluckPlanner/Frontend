
// import React, {useState, useEffect} from "react";
// import axios from "axios";
// import styled from "styled-components"
// import {Link} from "react-router-dom"

// const UsersPotLucks = () => {
//     const [potData, setpotData] = useState([])
//     useEffect (()=>{
//         const token = localStorage.getItem("token")
//         console.log("hi")
//         axios
//         .get("https://potluck-planner-backend.herokuapp.com/users/all", token)
//         .then(res => {
//             console.log(res.data);
//             setpotData(res.data);
           
//         })
//         .catch(err => {
//             console.log(err)
//         })
//     }, [])
//     return (
//     <div>
//         <h2>hi</h2>
//     </div>
//     )
// }

// export default UsersPotLucks

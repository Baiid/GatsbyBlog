import  { createGlobalStyle } from "styled-components"
import img from "../../images/pexels-james-wheeler-417074.jpg"



export const GlobalStyle = createGlobalStyle`

body{
margin:0rem;
padding:0rem;
background: -webkit-linear-gradient(to right, #2C5364, #203A43, #0F2027);  
background: 
linear-gradient(to right, #2C5364, #203A43, #0F2027),
url(${img}); /


background-repeat: no-repeat;
background-position: center;
background-size:cover;
height:auto;
min-height:100vh;
}

`
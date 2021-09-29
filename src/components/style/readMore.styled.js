import styled from "styled-components"



export const Wrapped = styled.div`

font-size:2rem;
display:block;
margin:0 auto;
text-align:center;
justify-content:center;
padding:5rem;

@media (max-width: 768px) {
 font-size:1rem;
 padding:0;
 margin-top:5rem;
}



ul{ 
list-style-type:none;
padding:0.5rem;

}

li{
 border: 4px solid rgba(145, 144, 146, 0.1); 
border-radius: 40px;
background:white;
padding:1.2rem;



&:hover{
    color:goldenrod;
    pointer:cursor;

}

`
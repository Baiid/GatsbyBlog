
import styled from "styled-components";



export const BlogWrapper = styled.div`


text-align:center;
padding:1rem;

color:#DFE1E0;

h1{
    padding:1rem;
}


.center{
    width:100%;
    height:auto;
}


.right{
    width:200px;
    height:auto;
    float:right;
    padding:0.5rem;
}




@media screen and (min-width:1000px){

padding: 0 15rem;
    .center{
        width:70%
    }

}


@media screen and (min-width:800px){

.right{
    width:40%;
    float:inherit;
}
}


`
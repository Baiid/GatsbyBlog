
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
${'' /* text-align:center;








h1{
    font-size:4rem;
}
p{
 color:#DFE1E0;
 padding:0 15rem ;
 
}

.right{
    float:right;
    margin:40px 0 68px 60px
}

@media screen and (min-width:1000px){
    .right{
        float:none;
        width:90%;
        display:block;
        margin:0 auto;
    }
} */}

`
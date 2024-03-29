import styled from "styled-components"


export const WrapperHome= styled.div`

    display: grid;
    grid-template-columns: repeat(12, 1fr); 
    grid-auto-rows: 350px;
    grid-gap: 16px;
    margin:20rem 5rem 2rem 5rem;

`

export const CardHome = styled.div`

background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 20px;
    transition: all .3s ease;


    &:hover{
        cursor: pointer;
    transform: scale(1.02);
    }

        ${'' /* Larger grid  */}
    &:nth-child(1), &:nth-child(6), &:nth-child(7) {
    grid-column-start: span 6;
    }

    ${'' /* Smaller grid */}

&:nth-child(2), &:nth-child(3), &:nth-child(4), &:nth-child(5), &:nth-child(8), &:nth-child(9) {
    grid-column-start: span 3;
}


    @media screen and (max-width: 1200px) {
   &:nth-child(n) {
        grid-column-start: span 6;
    }
}

${'' /* Full with image  */}
@media screen and (max-width: 800px) {
    &:nth-child(n) {
        grid-column-start: span 12;
    }
}
`



export const Category = styled.div`

font-family: Muli,sans-serif;
    font-size: 14px;
    line-height: 18px;
    font-weight: 700;
    color: #fff;
    margin: 0;

`


export const Title = styled.div`

font-family: Baskerville,serif;
    font-size: 24px;
    line-height: 28px;
    font-weight: 400;
    color: #fff;
    margin: 10px 0 0 0;
`
import styled, { css } from "styled-components";


const Body = styled.div`
height: 70vh;
width: 100%;
background-image: linear-gradient(to right, var(--light) 0%, var(--med) 100%);
margin-top: 20px;

${props => props.Home && css`
display: grid;
grid-template-rows: 40% 60%;
text-align: center;
padding-top:20px ;
`}
${props => props.Services && css`
 padding-top: 20px;
 @media (max-width:460px) {
  height: auto;
}
 
`}


`


export { Body }
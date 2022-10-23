import styled from "styled-components"

export default function Footer() {

  return (
    <Foter>&#169; KHALIL 2022</Foter>
  )
}

const Foter = styled.div`
background-color:var(--dark);
/* position: absolute; */
width: 100%;
height: 30px;
bottom: 0px;
text-align: center;
color: white;
font-family: gentona;
padding-top:5px;
`

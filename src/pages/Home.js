import styled from "styled-components"
import {Body} from "../styles/Styles"


export default function Home() {
 


  return (
    <Body Home>
      <Head>HOMEPAGE</Head>
      <Text>the LOREM COMMUNITY is a Non-Profit fast growing community of Professional Software Engineers that help small starting businesses with the best ways to promote their businesses.</Text>
    </Body>
  )
}

const Head = styled.h1`
font-family: gentona;
padding: 30px;
font-size: 50px;
color: var(--dark);
`

const Text = styled.div`
font-size: 22px;
font-weight: bold;
margin: 0 auto;
text-align: center;
width: 50%;
`
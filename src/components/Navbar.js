import { NavLink } from 'react-router-dom'
import styled from 'styled-components'


export default function Navbar() {
  return (
    <Nav>
      <Head>the LOREM COMMUNITY</Head>
      <Links><NavLink to={'/home'} className={({isActive})=>(isActive ? 'button': 'link')}>Home</NavLink>
        <NavLink to={'/services'} className={({isActive})=>(isActive ? 'button': 'link')}>Services</NavLink>
        <NavLink to={'/community'} className={({isActive})=>(isActive ? 'button': 'link')}>Community</NavLink>
      </Links>
    </Nav>
  )
}


const Nav = styled.div`
display: flex;
justify-content: space-between;
padding: 30px;
height: 80px;
width:90%;
margin: 0 auto;
border-bottom: 1px solid rgba(6,171,177,0.3);

`
const Head = styled.h2`
font-size: 30px;
font-family: gentona;
color: var(--dark);
`
const Links = styled.div`
align-self: flex-end;
flex-basis: 30%;
display: flex;
justify-content: space-around;
transition: all ease 0.5s;

`
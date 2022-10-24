import { Link } from 'react-router-dom'
import styled from 'styled-components'
export default function NotFound() {
  return (
    <Oops>
      <div>
        <h1>Oooops...</h1>
        <h2>That page cannot be found.</h2>
        <h3>Go back to the<Link to='/home'>Homepage</Link></h3>
      </div>
    </Oops>
  )
}

const Oops = styled.div`
height: 46vh;
width: 50%;
margin: 100px auto;
text-align: center;
color: var(--dark);
@media (max-width:460px) {
  font-size: small;
}
`
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NotFound = () => {
  return (
    <Error>
      <div>
        <h1>Oooops !!! Something went wrong...</h1>
        <h2>That page cannot be found.</h2>
        <h3>Go back to the<Link to='/home'>Homepage</Link></h3>
      </div>
    </Error>
  )
}

export default NotFound
const Error = styled.div`
height: 46vh;
width: 50%;
margin: 100px auto;
text-align: center;
color: var(--dark);
@media (max-width:460px) {
  font-size: small;
}
`

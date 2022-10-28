import React, { Component } from 'react'
import styled from 'styled-components';

export class ErrorBoundary extends Component {

  constructor(props) {
    super(props)

    this.state = {
      error: null,
    }
  }


  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }

static getDerivedStateFromError(error){
return {error};
}

  render() {
    if(this.state.error) return <Head>Something went wrong! Please refresh page</Head>

    return this.props.children
  }
}
const Head = styled.h1`
text-align: center;
font-family: gentona;
color: rebeccapurple;
height: 67vh;
padding-top: 40px;
@media (max-width:460px) {
font-size: medium;
}
`

export default ErrorBoundary
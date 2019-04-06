import React, { Component } from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
  text-align: center;
  h1 {
    padding-bottom: 0;
    margin-bottom: 0;
    font-size: 6rem;
    text-decoration: underline;
  }
  h2 {
    padding-top: 0;
    margin-top: 0;
    font-size: 1.2rem;
  }
`

class Header extends Component {
  render () {
    return (
      <StyledHeader>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </StyledHeader>
    )
  }
}

export default Header

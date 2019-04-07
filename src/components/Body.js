import React, { Component } from 'react'
import styled from 'styled-components'

class Body extends Component {
  render () {
    return <StyledBody>{this.props.children}</StyledBody>
  }
}

const StyledBody = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-size: calc(10px + 2vmin);
  color: white;
`

export default Body

import React, { Component } from 'react'
import styled from 'styled-components'

class Footer extends Component {
  render () {
    return (
      <StyledFooter>
        <p>
          To promote eye health and combat computer vision syndrome, use this
          timer to remind you to follow to 20-20-20 rule.
        </p>
        <p>Every 20 minutes focus on something 20 feet away for 20 seconds.</p>
      </StyledFooter>
    )
  }
}

const StyledFooter = styled.div`
  text-align: center;
  font-size: 1.6rem;
  max-width: 800px;
  padding: 1rem;
  color: #ddd;
`

export default Footer

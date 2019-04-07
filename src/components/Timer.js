import React, { Component } from 'react'
import styled from 'styled-components'
import ReactNotifications from 'react-browser-notifications'

class Timer extends Component {
  constructor (props) {
    super(props)
    this.showNotifications = this.showNotifications.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      count: this.props.time,
      running: false
    }
  }

  showNotifications () {
    if (this.props.notificationsEnabled) {
      if (this.n.supported()) this.n.show()
    }
  }

  handleClick (event) {
    this.n.close(event.target.tag)
  }

  componentWillMount () {
    const context = new AudioContext()
    const beep = () => {
      if (this.props.soundEnabled) {
        let o = context.createOscillator()
        let g = context.createGain()
        o.start(0)
        o.frequency.value = 830.6
        o.connect(g)
        g.connect(context.destination)
        g.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.1)
      }
    }
    if (!this.state.running) {
      setTimeout(() => {
        this.showNotifications()
        beep()
      }, 1)
      this.setState({ running: true })
      this.timer = setInterval(() => {
        if (this.state.count < 1) {
          this.setState({ count: this.props.time })
          this.showNotifications()
          beep()
        }
        const newCount = this.state.count - 1
        this.setState({ count: newCount >= 0 ? newCount : 0 })
      }, 1000)
    }
  }

  format (time) {
    let seconds = time % 60
    let minutes = Math.floor(time / 60)
    minutes = minutes.toString().length === 1 ? '0' + minutes : minutes
    seconds = seconds.toString().length === 1 ? '0' + seconds : seconds
    return minutes + ':' + seconds
  }

  render () {
    const { count } = this.state
    return (
      <StyledTimer>
        {this.format(count)}
        <ReactNotifications
          onRef={ref => (this.n = ref)}
          title='Rest Your Eyes!'
          body='Focus on something 20 feet away for 20 seconds.'
          icon='../../public/favicon.ico'
          tag='restYourEyes'
          onClick={event => this.handleClick(event)}
        />
      </StyledTimer>
    )
  }
}

const StyledTimer = styled.div`
  text-align: center;
  font-size: 10rem;
  padding-bottom: 3rem;
  color: #ddd;
`

export default Timer

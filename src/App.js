import React, { Component } from 'react'
import Body from './components/Body'
import Header from './components/Header'
import Timer from './components/Timer'
import Control from './components/Control'
import Footer from './components/Footer'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      soundEnabled: true,
      notificationsEnabled: true,
      title: '4T',
      subtitle: 'Twenty Twenty Twenty Timer'
    }
  }

  changeSettings = event => {
    let name = event.target.name
    let isChecked = event.target.checked
    let stateObject = () => {
      let returnObject = {}
      returnObject[name] = isChecked
      return returnObject
    }
    this.setState(stateObject)
  }

  render () {
    return (
      <div className='App'>
        <Body>
          <Header title={this.state.title} subtitle={this.state.subtitle} />
          <Timer
            time='1200'
            soundEnabled={this.state.soundEnabled}
            notificationsEnabled={this.state.notificationsEnabled}
          />
          <div>
            <Control
              name='soundEnabled'
              labelOn='Sound On'
              labelOff='Sound Off'
              isEnabled={this.state.soundEnabled}
              changeSettings={this.changeSettings}
            />
            <Control
              name='notificationsEnabled'
              labelOn='Notifications On'
              labelOff='Notifications Off'
              isEnabled={this.state.notificationsEnabled}
              changeSettings={this.changeSettings}
            />
          </div>
          <Footer />
        </Body>
      </div>
    )
  }
}

export default App

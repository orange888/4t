import React, { Component } from 'react'
import Body from './components/Body'
import Header from './components/Header'
import Timer from './components/Timer'
import Footer from './components/Footer'

class App extends Component {
  render () {
    let props = {
      title: '4T',
      subtitle: 'Twenty Twenty Twenty Timer'
    }
    return (
      <div className='App'>
        <Body title={props.title}>
          <Header title={props.title} subtitle={props.subtitle} />
          <Timer time='1200' />
          <Footer />
        </Body>
      </div>
    )
  }
}

export default App
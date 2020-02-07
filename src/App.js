import React, { Component } from 'react'
import './App.css';
import Navbar from './Components/NavBar'
import Banner from './Components/Banner'
import Tabs from './Components/Tabs'
import PhoneCards from './Components/PhoneCards'

class App extends Component {
  state = {
    on: false
  }

  toggle = () => {
    this.setState({
      on: !this.state.on
    })
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <Banner />

        <Tabs toggle={this.toggle} />


        {this.state.on && (
          <PhoneCards />
        )}
      </div>
    )
  }
}

export default App;

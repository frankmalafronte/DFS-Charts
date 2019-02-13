import React, {Component} from 'react'
import SubmitBox from './SubmitBox'
import './Styling.css'
import Welcome from './Welcome'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="App">
        <div className="App-Component">
          <Welcome />
        </div>
      </div>
    )
  }
}

export default App

import React, {Component} from 'react'
import SubmitBox from './SubmitBox'
import './AutoCompleteText.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="App">
        <div className="App-Component">
          <SubmitBox />
        </div>
      </div>
    )
  }
}

export default App

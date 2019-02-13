import React, {Component} from 'react'
import SubmitBox from './SubmitBox'
import './Styling.css'
class Welcome extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <div className="HomePageHeaderContainer">
          <div id="Header">DFS Charts</div>
        </div>
        <div className="HomePageHeaderContainer">
          <div id="SubHeader">
            DFS Charts pulls data from across the web to provide you with handy
            tools for visualizing daily fantasy basketball data
          </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <SubmitBox />
        </div>
      </div>
    )
  }
}

export default Welcome

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
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <div className="HomePageHeaderContainer">
            DFS Charts provides handy tools for visualizing DFS basketball data
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

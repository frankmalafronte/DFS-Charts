import React, {Component, Fragment} from 'react'
import Axios from '../../node_modules/axios'
import LineChart from './LineChart'

class Player extends Component {
  constructor(props) {
    super(props)
    this.state = {games: [], player: []}
  }

  async componentDidMount() {
    const response = await Axios.get(
      `/api/players/${this.props.match.params.id}`
    )
    this.setState({player: response.data.Name, games: response.data.games})
  }
  render() {
    return (
      <div>
        <LineChart games={this.state.games} player={this.state.player} />
      </div>
    )
  }
}

export default Player

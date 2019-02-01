import React, {Component} from 'react'
import Axios from '../../node_modules/axios'
import ScoreLineChart from './ScoreLineChart'
import SalaryLineChart from './SalaryLineChart'

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
        <ScoreLineChart games={this.state.games} player={this.state.player} />
        <SalaryLineChart games={this.state.games} player={this.state.player} />
      </div>
    )
  }
}

export default Player

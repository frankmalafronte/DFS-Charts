import React, {Component} from 'react'
import Axios from '../../node_modules/axios'
import ScoreLineChart from './ScoreLineChart'
import SalaryLineChart from './SalaryLineChart'
import Averages from './Averages'
import ScoreScatterPlot from './ScoreScatterplot'
import SubmitBox from './SubmitBox'
// import Grid from './Grid'

class Players extends Component {
  constructor(props) {
    super(props)
    this.state = {games: [], player: [], toggleScore: true}
  }

  toggleScore() {
    this.setState({toggleScore: !this.state.toggleScore})
  }

  async componentDidMount() {
    const response = await Axios.get(
      `/api/players/${this.props.match.params.id}`
    )
    const sortDateStrings = input => {
      for (let i = 0; i < input.length; i++) {
        let el = input[i]
        let year = el.Date.split(' ')[3]
        let month = el.Date.split(' ')[1]
        let day = el.Date.split(' ')[2]
        let date = month + ' ' + day + ' ' + year
        el.Date = date
      }
      input.sort(function(a, b) {
        return new Date(b.Date) - new Date(a.Date)
      })
      return input
    }

    this.setState({
      player: response.data.Name,
      games: sortDateStrings(response.data.games)
    })
  }

  render() {
    return (
      <div>
        <div>
          <SubmitBox />
        </div>
        <div>
          <Averages games={this.state.games} player={this.state.player} />
        </div>
        <div>
          {this.state.toggleScore ? (
            <button type="button" onClick={() => this.toggleScore()}>
              View Line Chart{' '}
            </button>
          ) : (
            <button type="button" onClick={() => this.toggleScore()}>
              View Scatter Plot{' '}
            </button>
          )}
        </div>
        <div>
          {this.state.toggleScore ? (
            <ScoreScatterPlot
              games={this.state.games}
              player={this.state.player}
            />
          ) : (
            <ScoreLineChart
              games={this.state.games}
              player={this.state.player}
            />
          )}
        </div>
        <div>
          <SalaryLineChart
            games={this.state.games}
            player={this.state.player}
          />
        </div>
      </div>
    )
  }
}

export default Players

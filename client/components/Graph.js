import React, {Component} from 'react'
import Axios from '../../node_modules/axios'
class Graph extends Component {
  constructor(props) {
    super(props)
    this.state = {games: null, player: null, value: null}
  }

  componentDidMount() {
    console.log('I ran')
    async function loadGames() {
      const res = await Axios.get('/api/games')
      return res.data
    }
    this.setState({games: loadGames()})
  }
  render() {
    console.log('this.state.games', this.state.games)
    return (
      <div>
        <h3> Select a Player </h3>
        <form onSubmit={typeof this.handleSubmit}>
          <label>
            Player
            <select
              name="Player"
              onChange={this.handleChange}
              value={this.state.player}
              required
            />
          </label>
        </form>
        <form onSubmit={this.handleSubmit}>
          <label>
            Type of Graph
            <select
              name="Type of Graph"
              onChange={this.handleChange}
              value={this.state.category}
              required
            >
              <option value="Score">Score</option>
              <option value="Salary">Salary</option>
            </select>
          </label>
        </form>
      </div>
    )
  }
}

export default Graph

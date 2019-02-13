import React, {Component, Fragment} from 'react'
import Axios from '../../node_modules/axios'
import {Link} from 'react-router-dom'
import './Styling.css'

// import Autosuggest from 'react-autosuggest';

class SubmitBox extends Component {
  constructor(props) {
    super(props)
    this.state = {players: [], suggestions: [], selection: '', hashMap: {}}
  }

  //query database for all players
  async componentDidMount() {
    const response = await Axios.get('/api/players')
    this.setState({players: response.data})
    let tempHashMap = {}
    for (let i = 0; i < this.state.players.length; i++) {
      const el = this.state.players[i]
      tempHashMap[el.Name] = el.id
    }
    this.setState({hashMap: tempHashMap})
  }

  // renders the list based on the input. When there is no input the list is hidden
  renderSuggestions() {
    const {suggestions, players, selection} = this.state
    if (suggestions.length === 0 && selection !== '') {
      return (
        <Link
          onClick={this.forceUpdate}
          to={`/players/${this.state.hashMap[this.state.selection]}`}
        >
          Submit{' '}
        </Link>
      )
    } else if (suggestions.length === 0) {
      return null
    } else {
      return (
        <ul>
          {suggestions.map(item => (
            <li onClick={() => this.suggestionSelected(item)} key={item}>
              {' '}
              {item}
            </li>
          ))}
        </ul>
      )
    }
  }

  //handles the user input, filtering the list by
  handleChange = event => {
    const value = event.target.value
    let suggestions = []
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i')
      suggestions = this.state.players
        .map(el => el.Name)
        .sort()
        .filter(el => regex.test(el))
    }
    this.setState(() => ({suggestions, selection: value}))
  }

  suggestionSelected(value) {
    this.setState(() => ({
      selection: value,
      suggestions: []
    }))
  }

  render() {
    const {selection} = this.state
    return (
      <div>
        {/* <h4> Search for a player by first name, then click the name you wish to select </h4> */}
        <div className="AutoCompleteText">
          <input
            value={selection}
            onChange={e => this.handleChange(e)}
            type="search"
            placeholder="Search by First Name"
          />
          {this.renderSuggestions()}
        </div>
      </div>
    )
  }
}

export default SubmitBox

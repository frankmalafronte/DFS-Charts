import React, {Component, Fragment} from 'react'
import Chart from 'react-google-charts'

class LineChart extends Component {
  constructor(props) {
    super(props)
    this.state = {chartData: null}
  }

  coerceChartData = props => {
    let output = [['x', 'score']]
    for (let i = 0; i < props.games.length; i++) {
      output.push([i + 1, parseInt(props.games.Score)])
    }
    console.log(output)
    return output
  }

  static getDeriveedStateFromProps(props, state) {
    this.setState({chartData: coerceChartData(props)})
  }

  render() {
    console.log(this.props, this.state)

    return (
      // <h3> Chart </h3>
      <Chart
        width="500px"
        height="300px"
        chartType="LineChart"
        loader={<div> Loading Chart </div>}
        data={this.state.chartData}
        options={{
          hAxis: {
            title: 'Date'
          },
          vAxis: {
            title: 'Points'
          }
        }}
      />
    )
  }
}

export default LineChart

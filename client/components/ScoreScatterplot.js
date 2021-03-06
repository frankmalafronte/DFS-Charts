import React from 'react'
import Chart from 'react-google-charts'

const coerceChartData = props => {
  let output = [['Date', 'Score']]
  for (let i = props.games.length - 1; i > 0; i--) {
    output.push([props.games[i].Date, parseFloat(props.games[i].Score)])
  }
  return output
}

function createScoreScatterPlot(props) {
  let data = coerceChartData(props)
  return (
    <div>
      <Chart
        width="1600px"
        height="800px"
        chartType="ScatterChart"
        loader={<div> Loading Chart </div>}
        data={data}
        options={{
          chartArea: {left: '8%'},
          legend: 'none',
          title: 'Fantasy Points Scored'
        }}
      />
    </div>
  )
}

export default createScoreScatterPlot

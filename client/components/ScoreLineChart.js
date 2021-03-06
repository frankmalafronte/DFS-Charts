import React from 'react'
import Chart from 'react-google-charts'

const coerceChartData = props => {
  let output = [['date', '']]
  for (let i = props.games.length - 1; i > 0; i--) {
    output.push([props.games[i].Date, parseFloat(props.games[i].Score)])
  }
  return output
}

function createScoreLineChart(props) {
  let data = coerceChartData(props)
  return (
    <div className="Chart">
      <Chart
        width="1600px"
        height="800px"
        chartType="LineChart"
        loader={<div> Loading Chart </div>}
        data={data}
        options={{
          chartArea: {left: '8%'},
          legend: 'none',
          title: 'Points Scored: Line'
        }}
      />
    </div>
  )
}

export default createScoreLineChart

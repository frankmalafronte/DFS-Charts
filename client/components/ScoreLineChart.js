import React from 'react'
import Chart from 'react-google-charts'

const coerceChartData = props => {
  let output = [['x', 'score']]
  for (let i = props.games.length - 1; i > 0; i--) {
    output.push([props.games[i].Date, parseFloat(props.games[i].Score)])
  }
  return output
}

function createSalaryLineChart(props) {
  let data = coerceChartData(props)
  return (
    <div>
      <Chart
        width="1400px"
        height="800px"
        chartType="LineChart"
        loader={<div> Loading Chart </div>}
        data={data}
        options={{
          hAxis: {
            title: 'Date'
          },
          vAxis: {
            title: 'Score'
          }
        }}
      />
    </div>
  )
}

export default createSalaryLineChart

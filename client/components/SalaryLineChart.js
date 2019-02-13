import React from 'react'
import Chart from 'react-google-charts'

const coerceChartData = props => {
  let output = [['date', '$']]
  for (let i = props.games.length - 1; i > 0; i--) {
    output.push([props.games[i].Date, parseInt(props.games[i].Salary)])
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
          legend: 'none',
          title: 'Daily Salary'
        }}
      />
    </div>
  )
}

export default createSalaryLineChart

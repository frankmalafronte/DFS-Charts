import React from 'react'
import Chart from 'react-google-charts'

const coerceChartData = props => {
  let output = [['x', 'salary']]
  for (let i = props.games.length - 1; i > 0; i--) {
    output.push([props.games[i].Date, parseInt(props.games[i].Salary)])
  }
  return output
}

function createSalaryLineChart(props) {
  console.log(props)
  let data = coerceChartData(props)
  return (
    <div>
      <h3> {props.player}</h3>
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
            title: 'Salary'
          }
        }}
      />
    </div>
  )
}

export default createSalaryLineChart

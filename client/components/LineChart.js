import React, {Component, Fragment} from 'react'
import Chart from 'react-google-charts'

const coerceChartData = props => {
  let output = [['x', 'score']]
  for (let i = props.games.length - 1; i > 0; i--) {
    console.log(props.games.Score)
    output.push([props.games[i].Date, parseFloat(props.games[i].Score)])
  }
  console.log(output)
  return output
}

function createLineChart(props) {
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
            title: 'Points'
          }
        }}
      />
    </div>
  )
}

export default createLineChart

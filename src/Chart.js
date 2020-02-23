import React from 'react';
import {RadialChart } from 'react-vis'

const myData = [{angle: 1}, {angle: 5}, {angle: 2}]

let Chart = (props) => {
  return (
    <RadialChart
      data={myData}
      width={150}
      height={150}
    />
  )
}


export default Chart
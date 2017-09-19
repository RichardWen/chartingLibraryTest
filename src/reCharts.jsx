import React, { Component } from 'react';
import {ComposedChart, Line, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
/*<Area
   yAxisId="1"
   dataKey="uv"
   stroke="transparent"
   isAnimationActive={false}
   dot={{stroke: 'none', fill: '#ff7300', r: 6}}
   activeDot={{stroke: 'none', fill: '#ff7300', r: 6}}
 />*/
class TestChart extends Component {
  render () {
    const data = [
        {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
        {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
        {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
        {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
        {name: 'Page E', uv: 1890, pv: 4800, amt: 2181, test: 5},
        {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
        {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
      ];
  	return (
      <ComposedChart width={730} height={250} data={data}>
        <XAxis dataKey="name" />
        <YAxis />

        <Legend />
        <CartesianGrid stroke="#f5f5f5" />
        <Area type="monotone" isAnimationActive={false} dataKey="amt" fill="#8884d8" stroke="#8884d8" />
        <Tooltip />
        <Line type="monotone" stroke="transparent" dataKey="uv" isAnimationActive={false} dot={{stroke: 'none', fill: '#ff7300', r: 6}}
        activeDot={{stroke: 'none', fill: '#ff7300', r: 6}}/>

      </ComposedChart>
      );
    }
}

export default TestChart

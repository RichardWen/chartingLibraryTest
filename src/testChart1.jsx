import React, { Component } from 'react';
import {XYPlot, Hint, Sunburst} from 'react-vis';

const COLORS = ['#4F2000', '#9B3F00', '#786268', '#431E33', '#958B66', '#534926', '#513545', '#655D42', '#672900']

const DATA = {
  children: [
    {children: [
      {size: 1, children: [], color: COLORS[1], label: 'excellent'},
      {size: 1, children: [], color: COLORS[2], label: 'chart'}
    ], color: COLORS[3]},
    {
      size: 1,
      children: [],
      color: COLORS[4],
      label: 'cool',
      labelStyle: {
        fontSize: 15,
        fontWeight: 'bold'
      }
    },
    {size: 1, children: [], color: COLORS[5], label: 'dogs'},
    {size: 1, children: [], color: COLORS[6], label: 'sunglasses'},
    {children: [
      {size: 1, children: [], color: COLORS[7], label: 'great'},
      {size: 1, children: [], color: COLORS[8], label: 'label'}
    ], color: COLORS[9]}
  ]
};

const tipStyle = {
  display: 'flex',
  color: '#fff',
  background: '#000',
  alignItems: 'center',
  padding: '5px'
};
const boxStyle = {height: '10px', width: '10px'};

function buildValue(hoveredCell) {
  const {radius, angle, angle0} = hoveredCell;
  const truedAngle = (angle + angle0) / 2;
  return {
    x: radius * Math.cos(truedAngle),
    y: radius * Math.sin(truedAngle)
  };
}


class HybridChart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hoveredCell: false
    };
  }
  render() {
    const {hoveredCell} = this.state;
    return (
      <Sunburst
        data={DATA}
        style={{stroke: '#fff'}}
        onValueMouseOver={v => this.setState({hoveredCell: v.x && v.y ? v : false})}
        onValueMouseOut={v => this.setState({hoveredCell: false})}
        height={300}
        margin={{top: 50, bottom: 50, left: 50, right: 50}}
        width={350}>
        {hoveredCell ? <Hint value={buildValue(hoveredCell)}>
          <div style={tipStyle}>
            <div style={{...boxStyle, background: hoveredCell.color}}/>
            {hoveredCell.color}
          </div>
        </ Hint> : null}
      </Sunburst>
    );
  }
}

export default HybridChart

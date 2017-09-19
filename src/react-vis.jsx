import React from 'react';

import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  GradientDefs,
  MarkSeries,
  AreaSeries,
  Hint
} from 'react-vis';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
    //this._rememberValue = this._rememberValue.bind(this);
    //this._forgetValue = this._forgetValue.bind(this);
  }

  rememberValue = (value) => {
    //debugger;
    this.setState({value});
    //console.log(value);
  }

  forgetValue = () => {
    this.setState({
      value: null
    });
  }

  render() {
    const {value} = this.state;
    return (
      <XYPlot
        width={1000}
        height={400}>
        <GradientDefs>
          <linearGradient id="BlueGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#468EE5" stopOpacity={0.4}/>
            <stop offset="100%" stopColor="#D1E3F8" stopOpacity={0.3} />
          </linearGradient>
        </GradientDefs>
        <GradientDefs>
          <linearGradient id="MixedGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#F6A623" stopOpacity={0.4}/>
            <stop offset="100%" stopColor="#468EE5" stopOpacity={0.3} />
          </linearGradient>
        </GradientDefs>
        <XAxis />
        <YAxis />
        <AreaSeries
          color={'url(#MixedGradient)'}
          data={[
            {x: 0, y: 1},
            {x: 1, y: 10},
            {x: 2, y: 5, test: 8},
            {x: 3, y: 15}
          ]}/>
        <MarkSeries
          color={'#F6A623'}
          onValueClick={this.rememberValue}
          onValueMouseOut={this.forgetValue}
          data={[
            {x: 1, y: 2},
            {x: 2, y: 3, test: 8},
            {x: 3, y: 8}
          ]}/>
        {value ?
          <Hint value={value}/> :
          null
        }
      </XYPlot>
    );
  }
}

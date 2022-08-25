import React, { Component } from 'react';
import LineChart from 'echarts-for-react';

const lineGraph = () => {
  return (
    <div>
        <div className='ml-5 font-bold text-[20px]'>
            Weekly Statistics
        </div>
        <LineChart
        option={{
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: [1,2,4,0,3,2,1],
              type: 'line',
            }
          ]
        }}
      />
    </div>
  )
}

export default lineGraph
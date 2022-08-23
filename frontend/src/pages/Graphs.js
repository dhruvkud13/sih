import React from 'react'
import Stats from '../components/Stats';
import DocStats from '../components/DocStats';

const Graphs = () => {
  return (
    <div className='flex'>
        <div style={{
        width: "50%",
        height: "50%"
      }}>
        <Stats /></div>
        <div style={{
        width: "50%",
        height: "50%"
      }}><DocStats /></div>
    </div>
  )
}

export default Graphs
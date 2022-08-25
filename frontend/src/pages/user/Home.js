import { Carousel } from 'antd';
import { Card } from 'antd';
import React from 'react';
import DocStats from '../../components/DocStats';
const contentStyle = {
  height: '300px',
  color: '#fff',
  lineHeight: '250px',
  textAlign: 'center',
  background: '#364d79',
};
const Home = () => {
  return (
      <div className='flex flex-col'>
        <div className='flex flex-row'>
        <div className="w-1/2 flex-row site-card-border-less-wrapper ">
    <Card
      title="User Details"
      bordered={true}
      style={{
        width: 770,
        fontSize:20,
        height: 300,
      }}
    >
      <p>Name: Dhruv Kudalkar</p>
      <p>Email: dhruv@gmail.com</p>
      <p>Mobile No: 9876543210</p>
      <p>Date of Birth: DD/MM/YYYY</p>
    </Card>
  </div>
        <div className='w-1/2'>
        <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>Announcement 1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>Announcement 2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>Announcement 3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>Announcement 4</h3>
    </div>
  </Carousel>
  </div>
  </div>
  <div className='w-full'>
    <DocStats />
  </div>
      </div>
  )
}

export default Home
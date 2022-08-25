import { Carousel } from 'antd';
import { Card } from 'antd';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import DocStats from '../../components/LineGraph';
import BarCharts from '../../components/StackedBar';
import { useState } from 'react';
import { lmaodata } from "./announcementdata";
// const contentStyle = {
//   height: '300px',
//   color: '#fff',
//   lineHeight: '150px',
  
//   textAlign: 'center',
//   background: '#364d79',
// };
const Cdata=(props)=><div>
<div style={{backgroundImage:`url(${props.item.announcementType})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}} className='bg-logoblue h-[300px] text-white font-raleway flex flex-col items-center justify-center'>

  <div className='absolute top-2 text-xs'>ANNOUNCEMENTS</div>
  <div className='font-bold text-3xl mb-5'>{props.item.announcementName}</div>
  <div >{props.item.announcementDesc}</div>
</div>
</div>
const UserHome = () => {

  const[data,setData]= useState(lmaodata);

  // const[loading,setLoading]= useState(false);
  // const url="http://localhost:8000/getallannouncement"
  // useEffect(()=>{
  // const fetchData = async () => {
  //       try {
  //         setData([]);
  
  //    const response= await fetch(url, {
  //       method: "GET",
  //       headers: { "Content-Type": "application/json" },
  //     })
  //         const json = await response.json();
  //         const announcements = []
  //         for (const i in json) {
  //   if (json[i].value.announcementVisibility===true) announcements.push(json[i].value);
  
  //         }
  //         setData(announcements)
  //         setLoading(false);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     fetchData();
  // },[])
  const user= useSelector((state) => state.user);




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
      <p>Name: {user.username}</p>
      <p>Email: {user.useremail}</p>
      <p>Mobile No: {user.mobileNo}</p>
      <p>Date of Birth: {user.dob}</p>
    </Card>
  </div>
        <div className='w-1/2 mr-2 rounded-lg shadow-2xl'>
        <Carousel autoplay effect='scrollx'>

      {data.map((item)=>(
       <Cdata item={item} />
        )
      )}
  </Carousel>
  </div>
  </div>
  <div className='flex'>
  <div className='w-full'>
    <DocStats />
  </div>
  {/* <div className='w-1/2'>
    <BarCharts />
  </div> */}
  </div>
      </div>
  )
}

export default UserHome
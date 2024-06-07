import React from 'react'
import  Chart  from 'chart.js/auto'
const Dashboard = () => {
     const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];
  return (
    <div className='w-full h-screen py-16 px-4 bg-white text-black'>
      <div className='max-w-[1240px] grid grid-cols-1 md:grid-cols-3'>
      <h1 className='text-4xl font-bold '>Chart</h1>
      <div className='col-span-1'>
        <Chart 
        type='line'
        data= {data}
        />
      </div>
      <div></div>
      <div></div>

      </div>
    </div>
  )
}

export default Dashboard

"use client"
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import React from 'react'
import Image from 'next/image';
import MoreDark from '../../public/moreDark.png'
import MaleFame from '../../public/maleFemale.png'

const data = [
  {name:'Goup A', value: 90, fill:"#C3EBFA"},
  {name:'Group B', value: 10, fill: "#FAE27C"}
];


export default function PerformanceChart() {
  return (
    <div className='bg-white p-4 rounded-md h-80 relative'>
      {/* TITLE */}
      <div className='flex justify-between items-center'>
        <h1 className='text-lg font-semibold'>Performance</h1>
        <Image src={MoreDark} alt='' width={16} height={16}/>
      </div>
      {/* CHART */}
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              dataKey="value"
              startAngle={180}
              endAngle={0}
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={70}
              fill="#8884d8"
            />
          </PieChart>  
        </ResponsiveContainer>
        
      {/* BOTTOM */}
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
        <h1 className='text-3xl font-bold'>9.2</h1>
        <p className='text-xs text-gray-300'>of 10 max LTS</p>
      </div>
      <h2 className='font-medium absolute bottom-16 left-0 right-0 m-auto text-center'>1st Semester - 2nd Semester</h2>
    </div>
  )
}

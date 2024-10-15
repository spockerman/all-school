"use client"
import React from 'react'
import Image from 'next/image';
import MoreDark from '../../public/moreDark.png'
import MaleFame from '../../public/maleFemale.png'

import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Mon',
    present: 40,
    absent: 24,
  },
  {
    name: 'Tue',
    present: 30,
    absent: 13,
  },
  {
    name: 'Wed',
    present: 20,
    absent: 98,
  },
  {
    name: 'Thu',
    present: 27,
    absent: 39,
  },
  {
    name: 'Fri',
    present: 18,
    absent: 48,
  },
];


export default function AttendanceChart() {
  return (
    <div className='bg-white rounded-lg w-full h-full p-4'>
      {/* TITLE */}
      <div className='flex justify-between items-center'>
        <h1 className='text-lg font-semibold'>Attendance</h1>
        <Image src={MoreDark} alt='' width={20} height={20}/>
      </div>
      {/* CHART */}
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          barSize={20}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke='#ddd'/>
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} />
          <YAxis axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} />
          <Tooltip contentStyle={{borderRadius:"10px", borderColor:"lightGray"}} />
          <Legend align='left' verticalAlign='top' wrapperStyle={{paddingTop:"20px", paddingBottom:'40px'}}/>
          <Bar dataKey="absent" fill="#C3EBFA" radius={[10,10,0,0]} legendType='circle'/>
          <Bar dataKey="present" fill="#FAE27C" radius={[10,10,0,0]} legendType='circle'/>
        </BarChart>
      </ResponsiveContainer>
      
    </div>
  )
}

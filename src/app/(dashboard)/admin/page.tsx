import React from 'react'
import UserCard from '@/components/UserCard'
import CountChart from '@/components/CountChart'
import AttendanceChart from '@/components/AttendanceChart'
import FinanceChart from '@/components/FinanceChart'

export default function AdminPage() {
  return (
    <div className='p-4 gap-4 flex flex-col md:flex-row'>
      {/* LEFT */}
      <div className='w-full lg:w-2/3 flex flex-col gap-8'>
      {/* USER CARD */}
      <div className='flex gap-4 justify-between flex-wrap'>
        <UserCard type='student'/>
        <UserCard type='teacher'/>
        <UserCard type='parent'/>
        <UserCard type='staff'/>
      </div>
      {/* MIDDLE CHART */}
      <div className='flex gap-4 flex-col lg:flex-row'>
        <div className='w-full lg:w-1/3 h-[450px]'>
          <CountChart/>
        </div>
        <div className='w-full lg:w-2/3 h-[450px]'>
          <AttendanceChart/>
        </div>
      </div>
      {/* BOTTOM CHART */}
      <div className='w-full h-[500px]'>
        <FinanceChart/>
      </div>  
      </div>
      {/* RIGHT */}
      <div className='w-full lg:w-1/3'>r</div>
    </div>
  )
}

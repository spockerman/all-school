"use client"
import Image from 'next/image';
import React from 'react'
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];



export default function  Announcements(){
const [value, onChange] = useState<Value>(new Date());

  return (
    <div className='bg-white rounded-sm p-4'>
      <div className='flex items-center justify-between'>
        <h1 className='text-xl font-semibold my-4'>Announcements</h1>
        <span className='text-sx text-gray-400'>View All</span>
      </div>
      
      <div className='flex flex-col gap-4'>
        <div className='bg-lamaSkyLight rounded-md p-4'>
            <div className='flex items-center justify-between'>
                <h2 className='font-medium'>Lorem ipsum dolor sit amet.</h2>
                <span className='text-xs text-gray-200 bg-white rounded-md px-1 py-1'>2025-01-01</span>
            </div>
            <p className='text-sm text-gray-400 mt-1'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis non doloribus, ea nihil rerum quidem. 
            </p>
        </div>
        <div className='bg-lamaYellowLight rounded-md p-4'>
            <div className='flex items-center justify-between'>
                <h2 className='font-medium'>Lorem ipsum dolor sit amet.</h2>
                <span className='text-xs text-gray-200 bg-white rounded-md px-1 py-1'>2025-01-01</span>
            </div>
            <p className='text-sm text-gray-400 mt-1'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis non doloribus, ea nihil rerum quidem. 
            </p>
        </div>
        <div className='bg-lamaPurpleLight rounded-md p-4'>
            <div className='flex items-center justify-between'>
                <h2 className='font-medium'>Lorem ipsum dolor sit amet.</h2>
                <span className='text-xs text-gray-200 bg-white rounded-md px-1 py-1'>2025-01-01</span>
            </div>
            <p className='text-sm text-gray-400 mt-1'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis non doloribus, ea nihil rerum quidem. 
            </p>
        </div>



        
      </div>
    </div>
  );
}
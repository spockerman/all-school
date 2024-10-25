"use client"
import Image from 'next/image';
import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import More from '../../public/moreDark.png'

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const events =[
    {
        id: 1,
        title: "Lorem ipsum dolor",
        time: "1200 PM - 2:00 AM",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
    },
    {
        id: 2,
        title: "Lorem ipsum dolor",
        time: "1200 PM - 2:00 AM",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
    },
    {
        id: 3,
        title: "Lorem ipsum dolor",
        time: "1200 PM - 2:00 AM",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
    },

]


export default function  EventCalendar(){
const [value, onChange] = useState<Value>(new Date());

  return (
    <div className='bg-white rounded-sm p-4'>
      <Calendar onChange={onChange} value={value} />
      <div className='flex items-center justify-between'>
        <h1 className='text-xl font-semibold my-4'>Events</h1>
        <Image src={More} alt='' width={20} height={20}/>
      </div>
      <div className='flex flex-col gap-4'>
        {events.map(event =>(
            <div className='p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple' key={event.id}>
                <div className='flex justify-between items-center'>
                    <h1 className='font-semibold text-gray-600'>{event.title}</h1>
                    <span className='text-gray-400 text-xs'>{event.time}</span>
                </div>
                <p className='mt-2 text-gray-400 text-sm'>{event.description}</p>
            </div>
        ))}
      </div>
    </div>
  );
}
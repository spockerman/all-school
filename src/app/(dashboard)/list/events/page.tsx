import TableSearch from '@/components/TableSearch';
import Pagination from '@/components/Pagination';
import Table from '@/components/Table';
import React from 'react';
import Image from 'next/image';
import Filter from '../../../../../public/filter.png';
import Sort from '../../../../../public/sort.png';
import Plus from '../../../../../public/plus.png';
import Edit from '../../../../../public/edit.png';
import Delete from '../../../../../public/delete.png';
import Link from 'next/link';
import {  eventsData, role } from '@/lib/data';
import FormModal from '@/components/FormModal';


type Event = {
    id: number,
    title: string,
    class: string,
    date: string,
    startTime: string,
    endTime: string,
  };
  
  const columns = [
    {
      header: "Title",
      accessor: "title",
    },
    {
        header: "Class",
        accessor: "class",
      },
    {
        header: "Date",
        accessor: "date",
        className: "hidden md:table-cell",
      },
      {
        header: "Start Time",
        accessor: "startTime",
        className: "hidden md:table-cell",
      },
      {
        header: "End Time",
        accessor: "endTime",
        className: "hidden md:table-cell",
      },
      {
        header: "Date",
        accessor: "date",
        className: "hidden md:table-cell",
      },
    {
      header: "Actions",
      accessor: "action",
    },
  ];

export default function EventListPage(){

    const renderRow = (item:Event) =>(
        <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight'>
            <td className='flex items-center gap-4 p-4'>{item.title}</td>
              <td className='md:table-cell'>{item.class}</td>
              <td className='hidden md:table-cell'>{item.date}</td>
              <td className='hidden md:table-cell'>{item.startTime}</td>
              <td className='hidden md:table-cell'>{item.endTime}</td>
              
            <td>
                <div className='flex items-center gap-2'>
                    <Link href={`/list/teachers/${item.id}`}>
                        <button className='w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky'>
                            <Image src={Edit} alt='' width={16} height={16} />
                        </button>
                    </Link>
                    {role === "admin" && (
                        <>
                          <FormModal table='event' type='update' data={item} />
                          <FormModal table='event' type='delete' id={item.id} />
                        </>
                        
                    )}
                </div>
            </td>
        </tr>

                )

    return (
        <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
            {/* TOP */}
            <div className='flex items-center justify-between'>
                <h1 className='hidden md:block text-lg font-semibold'>All Events</h1>
                <div className='flex flex-col md:flex-row items-center justify-between gap-4 w-full md:w-auto'>
                    <TableSearch/>
                    <div className='flex items-center gap-4 self-end'>
                        <button className='w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow'>
                            <Image src={Filter} alt='' width={14} height={14}/>
                        </button>
                        <button className='w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow'>
                            <Image src={Sort} alt='' width={14} height={14}/>
                        </button>
                        {role === 'admin' && (
                          <FormModal table='event' type='create'/>
                        )}
                        
                    </div>
                </div>
            </div>
            {/* LIST */}
            <div>
                <Table columns={columns} renderRow={renderRow} data={eventsData}/>
            </div>
            {/* PAGINATION */}
            <div>
                <Pagination/>

            </div>
        </div>
    )
}
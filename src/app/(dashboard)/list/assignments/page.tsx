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
import { assignmentsData, role } from '@/lib/data';
import FormModal from '@/components/FormModal';


type Assignment = {
    id: number;
    subject: string;
    class: string;
    teacher: string;
    dueDate: string;
  };
  
  const columns = [
    {
      header: "Subject Name",
      accessor: "name",
    },
    {
        header: "Class",
        accessor: "class",
        className: "hidden md:table-cell",
      },
    {
        header: "Teacher",
        accessor: "teacher",
        className: "hidden md:table-cell",
      },
      {
        header: "DueDate",
        accessor: "dueDate",
        className: "hidden md:table-cell",
      },
    {
      header: "Actions",
      accessor: "action",
    },
  ];

export default function AssignmentsListPage(){

    const renderRow = (item:Assignment) =>(
        <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight'>
            <td className='flex items-center gap-4 p-4'>{item.subject}</td>
              <td className='md:table-cell'>{item.class}</td>
              <td className='hidden md:table-cell'>{item.teacher}</td>
              <td className='hidden md:table-cell'>{item.dueDate}</td>
            <td>
                <div className='flex items-center gap-2'>
                    <Link href={`/list/teachers/${item.id}`}>
                        <button className='w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky'>
                            <Image src={Edit} alt='' width={16} height={16} />
                        </button>
                    </Link>
                    {role === "admin" && (
                        <>
                        <FormModal table='assignment' type='update' data={item}/>
                        <FormModal table='assignment' type='delete' id={item.id}/>
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
                <h1 className='hidden md:block text-lg font-semibold'>All Assignments</h1>
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
                            <FormModal table='assignment' type='create'/>
                        )}
                    </div>
                </div>
            </div>
            {/* LIST */}
            <div>
                <Table columns={columns} renderRow={renderRow} data={assignmentsData}/>
            </div>
            {/* PAGINATION */}
            <div>
                <Pagination/>

            </div>
        </div>
    )
}
import TableSearch from '@/components/TableSearch';
import Pagination from '@/components/Pagination';
import Table from '@/components/Table';
import React from 'react';
import Image from 'next/image';
import Filter from '../../../../../public/filter.png';
import Sort from '../../../../../public/sort.png';
import Plus from '../../../../../public/plus.png';
import View from '../../../../../public/view.png';
import Delete from '../../../../../public/delete.png';
import Link from 'next/link';
import { role, subjectsData } from '@/lib/data';


type Subject = {
    id: number;
    name: string;
    teachers: string[];
  };
  
  const columns = [
    {
      header: "Subject Name",
      accessor: "name",
    },
    {
      header: "Teachers",
      accessor: "teachers",
      className: "hidden md:table-cell",
    },
    {
      header: "Actions",
      accessor: "action",
    },
  ];

export default function SubjectsListPage(){

    const renderRow = (item:Subject) =>(
        <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight'>
            <td className='flex items-center gap-4 p-4'>
                {item.name}
              </td>
              <td className='hidden md:table-cell'>
              {item.teachers.join(",")}
              </td>
            <td>
                <div className='flex items-center gap-2'>
                    <Link href={`/list/teachers/${item.id}`}>
                        <button className='w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky'>
                            <Image src={View} alt='' width={16} height={16} />
                        </button>
                    </Link>
                    {role === "admin" && (
                        <button className='w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple'>
                        <Image src={Delete} alt='' width={16} height={16} />
                    </button>
                    )}
                </div>
            </td>
        </tr>

                )

    return (
        <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
            {/* TOP */}
            <div className='flex items-center justify-between'>
                <h1 className='hidden md:block text-lg font-semibold'>All Subjects</h1>
                <div className='flex flex-col md:flex-row items-center justify-between gap-4 w-full md:w-auto'>
                    <TableSearch/>
                    <div className='flex items-center gap-4 self-end'>
                        <button className='w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow'>
                            <Image src={Filter} alt='' width={14} height={14}/>
                        </button>
                        <button className='w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow'>
                            <Image src={Sort} alt='' width={14} height={14}/>
                        </button>
                        <button className='w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow'>
                            <Image src={Plus} alt='' width={14} height={14}/>
                        </button>
                    </div>
                </div>
            </div>
            {/* LIST */}
            <div>
                <Table columns={columns} renderRow={renderRow} data={subjectsData}/>
            </div>
            {/* PAGINATION */}
            <div>
                <Pagination/>

            </div>
        </div>
    )
}
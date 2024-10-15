import Image from 'next/image'
import React from 'react'
import Search from '../../public/search.png';
import Announcement from '../../public/announcement.png';
import Message from '../../public/message.png';
import Avatar from '../../public/avatar.png';

export default function Navbar() {
  return (
    <div className='flex items-center justify-between p-4'>
      {/*SEARCH BAR*/}
      <div className='hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2'>
        <Image src={Search} alt='' width={14} height={14}/>
        <input type='text' placeholder='Search...' className='w-[200px] p-2 bg-transparent outline-none' />
      </div>
      {/*ICONS AND USER BAR*/}
      <div className='flex items-center gap-6 justify-end w-full'>
        {/*IMAGENS */}
        <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'>
          <Image src={Message} alt='' width={20} height={20}/>
         </div>
        <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative'>
          <Image src={Announcement} alt='' width={20} height={20}/>
          <div className='absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs'>1</div>
        </div>
        {/*USERS */}
        <div className='flex flex-col'>
          <span className='text-xs leading-3 font-medium'>John Doe</span>
          <span className='text-[10px] text-gray-500 text-right'>Admin</span>
        </div>
        <Image src={Avatar} alt='' width={36} height={36} className='rounded-full'/>
      </div>
    </div>
  )
}

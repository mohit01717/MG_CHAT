import React from 'react'
import { user_img } from '../images'

const Cards = () => {
  return (
    <div className=' flex gap-2 p-2  items-center rounded hover:bg-slate-500 cursor-pointer'>
        <img className='h-10' src={user_img} alt="" />
        <div className=' flex flex-col'>
            <div className='flex justify-between items-center  w-[300px]'>
            <h4>Mohit Gagneja</h4>
            <h4 className=' text-[12px]'>02:10 PM</h4>
            </div>
            <p className=" text-gray-300 font-semibold text-[14px]">Lorem ipsum dolor sit.dsdad</p>
        </div>
    </div>
  )
}

export default Cards
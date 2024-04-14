import React from 'react'
import { user_img } from '../images'



const Cards = ({img,name,chats,onclick}) => {
  return (
    <div className=' flex gap-2 p-2  items-center rounded hover:bg-slate-500 cursor-pointer' onClick={onclick}>
        <img className='h-10' src={img} alt="" />
        <div className=' flex flex-col'>
            <div className='flex justify-between items-center  w-[300px]'>
            <h4>{name}</h4>
            <h4 className=' text-[12px]'>02:10 PM</h4>
            </div>
            <p className=" text-gray-300 font-semibold text-[14px]">{chats}</p>
        </div>
    </div>
  )
}

export default Cards
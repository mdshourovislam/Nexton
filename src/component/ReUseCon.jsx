import React from 'react'
import { GiRoundStar } from "react-icons/gi";
import { IoBagHandleOutline } from "react-icons/io5";
import { TbListDetails } from "react-icons/tb";


const ReUseCon = ({title,price,thumbnail,rating,category,discount,handlars}) => {
    return (
        <div className='w-[309px]'>
                <div className=' w-full h-[360px] overflow-hidden group bg-gray-100 relative '>
                    <img src={thumbnail} alt="" />
                    <div className='right-[-35px] group-hover:right-2  duration-[.4s] block  absolute justify-center items-center right-2 top-2'>
                        <div>

                        <button className='h-[36px] w-[36px] bg-white rounded-full active:scale-[1.1] p-2 '> <IoBagHandleOutline /></button>
                        </div>
                        <div>

                        <button onClick={handlars} className='h-[36px] w-[36px] bg-white rounded-full active:scale-[1.1] p-2 mt-4'> <TbListDetails /></button>
                        </div>
                    </div>

                </div>
                <div className='flex justify-between px-4 mt-5'>
                    <div>
                        <h2 className='font-Poppin font-bold text-[16px] text-[#111827]'>{title}</h2>
                        <h3 className='font-Poppin font-normal text-[14px] text-[#4B5563]'>{category}</h3>

                        <div className='flex gap-1 items-center text-amber-500  '>
                            <GiRoundStar />

                            <p className='text-black'>{rating}</p>
                        </div>
                    </div>
                    <div>
                        <p className='font-Poppin font-normal text-[14px] text-fontc'>${discount}</p>
                        <p className='font-Poppin font-normal text-[14px] text-fontcol line-through'>${price}</p>
                    </div>
                </div>


            </div>
    )
}

export default ReUseCon
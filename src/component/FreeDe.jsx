import React from 'react'
import { FaShippingFast } from "react-icons/fa";
import { RiLoopLeftLine } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";
import { RiRefund2Line } from "react-icons/ri";


const FreeDe = () => {
  return (
    <>

    <section class='frist-dele'>
        <div className="container  py-[52px]">
            <div className='row flex justify-between py-6 px-10 bg-gray-100  rounded-[16px]'>
                <div className='flex justify-center gap-4 w-[300px] items-center '>
                    <FaShippingFast className='w-6 h-6 '/>
                    <div>
                        <h1 className='font-Poppin  font-bold text-[#111827] text-[18px]'>Free shipping</h1>
                        <p className=' font-Poppin text-[14px] font-normal text-[#4B5563]'>On orders over $50.00</p>
                    </div>
                </div>
                <div className='flex justify-center gap-4 w-[300px] items-center '>
                    <RiLoopLeftLine className='w-6 h-6 '/>
                    <div>
                        <h1 className='font-Poppin  font-bold text-[#111827] text-[18px]'>Very easy to return</h1>
                        <p className=' font-Poppin text-[14px] font-normal text-[#4B5563]'>Just phone number</p>
                    </div>
                </div>
                <div className='flex justify-center gap-4 w-[300px] items-center '>
                    <TbWorld className='w-6 h-6 '/>
                    <div>
                        <h1 className='font-Poppin  font-bold text-[#111827] text-[18px]'>Worldwide delivery</h1>
                        <p className=' font-Poppin text-[14px] font-normal text-[#4B5563]'>Fast delivery worldwide</p>
                    </div>
                </div>
                <div className='flex justify-center gap-4 w-[300px] items-center '>
                    <RiRefund2Line className='w-6 h-6 '/>
                    <div>
                        <h1 className='font-Poppin  font-bold text-[#111827] text-[18px]'>Refunds policy</h1>
                        <p className=' font-Poppin text-[14px] font-normal text-[#4B5563]'>60 days return for any reason</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    </>
  )
}

export default FreeDe
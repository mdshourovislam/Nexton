import React from 'react'
import Slider from 'react-slick';
import { IoIosArrowRoundForward } from "react-icons/io";


const Exploring = () => {


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
    };
    return (
        <>
            <section className='exploring '>

                <div className="container py-[88px]">

                    <div>
                        <h2 className='font-Poppin font-semibold text-[36px] text-[#4B5563]'><samp className='text-[#111827]
                     font-Poppin font-semibold text-[36px]'>Start exploring.</samp>Good things are waiting for you</h2>
                        <div className="slider-container gap-5  py-10">
                            <Slider {...settings}>
                                <div className='p-10 w-104.5 border border-[#E5E7EB] rounded-[18px]'>
                                    <div className=' flex justify-between'>
                                        <div> 
                                            <h1 className='font-Poppin text-[24px] font-semibold text-[#111827]'>For Men's</h1>
                                            <p className='font-Poppin text-[14px] font-normal text-[#4B5563]'>Starting at $24</p>
                                        </div>
                                        <button className='flex py-2 pl-3 items-center gap-2 border-l-2 border-[#E5E7EB] font-Poppin font-medium text-[14px] text-[#4B5563] '>Shop Now <IoIosArrowRoundForward className='w-4 h-4.5 flex justify-center items-center'/></button>
                                    </div>
                                   
                                </div>
                                <div className='p-10 w-104.5  border border-[#E5E7EB] rounded-[18px]'>
                                    <div className=' flex justify-between'>
                                        <div> 
                                            <h1 className='font-Poppin text-[24px] font-semibold text-[#111827]'>For Men's</h1>
                                            <p className='font-Poppin text-[14px] font-normal text-[#4B5563]'>Starting at $24</p>
                                        </div>
                                        <button className='flex py-2 pl-3 items-center gap-2 border-l-2 border-[#E5E7EB] font-Poppin font-medium text-[14px] text-[#4B5563] '>Shop Now <IoIosArrowRoundForward className='w-4 h-4.5 flex justify-center items-center'/></button>
                                    </div>
                                   
                                </div>
                                <div className='p-10 w-104.5  border border-[#E5E7EB] rounded-[18px]'>
                                    <div className=' flex justify-between'>
                                        <div> 
                                            <h1 className='font-Poppin text-[24px] font-semibold text-[#111827]'>For Men's</h1>
                                            <p className='font-Poppin text-[14px] font-normal text-[#4B5563]'>Starting at $24</p>
                                        </div>
                                        <button className='flex py-2 pl-3 items-center gap-2 border-l-2 border-[#E5E7EB] font-Poppin font-medium text-[14px] text-[#4B5563] '>Shop Now <IoIosArrowRoundForward className='w-4 h-4.5 flex justify-center items-center'/></button>
                                    </div>
                                   
                                </div>
                                <div className='p-10 w-104.5  border border-[#E5E7EB] rounded-[18px]'>
                                    <div className=' flex justify-between'>
                                        <div> 
                                            <h1 className='font-Poppin text-[24px] font-semibold text-[#111827]'>For Men's</h1>
                                            <p className='font-Poppin text-[14px] font-normal text-[#4B5563]'>Starting at $24</p>
                                        </div>
                                        <button className='flex py-2 pl-3 items-center gap-2 border-l-2 border-[#E5E7EB] font-Poppin font-medium text-[14px] text-[#4B5563] '>Shop Now <IoIosArrowRoundForward className='w-4 h-4.5 flex justify-center items-center'/></button>
                                    </div>
                                   
                                </div>
                                <div className='p-10 w-104.5  border border-[#E5E7EB] rounded-[18px]'>
                                    <div className=' flex justify-between'>
                                        <div> 
                                            <h1 className='font-Poppin text-[24px] font-semibold text-[#111827]'>For Men's</h1>
                                            <p className='font-Poppin text-[14px] font-normal text-[#4B5563]'>Starting at $24</p>
                                        </div>
                                        <button className='flex py-2 pl-3 items-center gap-2 border-l-2 border-[#E5E7EB] font-Poppin font-medium text-[14px] text-[#4B5563] '>Shop Now <IoIosArrowRoundForward className='w-4 h-4.5 flex justify-center items-center'/></button>
                                    </div>
                                   
                                </div>
                                <div className='p-10 w-104.5  border border-[#E5E7EB] rounded-[18px]'>
                                    <div className=' flex justify-between'>
                                        <div> 
                                            <h1 className='font-Poppin text-[24px] font-semibold text-[#111827]'>For Men's</h1>
                                            <p className='font-Poppin text-[14px] font-normal text-[#4B5563]'>Starting at $24</p>
                                        </div>
                                        <button className='flex py-2 pl-3 items-center gap-2 border-l-2 border-[#E5E7EB] font-Poppin font-medium text-[14px] text-[#4B5563] '>Shop Now <IoIosArrowRoundForward className='w-4 h-4.5 flex justify-center items-center'/></button>
                                    </div>
                                   
                                </div>
                                
                            </Slider>
                        </div>
                    </div>



                </div>

            </section>
        </>
    )
}

export default Exploring
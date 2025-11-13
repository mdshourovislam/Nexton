import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import faveicon from '../assets/images/favicon.png'
import { TiThMenu } from "react-icons/ti";
import { Link } from 'react-router';

const Navbar = () => {

    const [show, setShow] = useState(true)
    return (
        <>

            <nav id='Navbar' className='py-[27px] hidden lg:block'>

                <div className="container">
                    <div className="navrow flex justify-between ">
                        <div className='imagediv'><img src={logo} alt="" /></div>
                        <div className="navSer w-[400px] h-[52px] bg-parmirycolor gap-2.5 rounded-[100px] p-6 flex text-[20px] items-center">
                            <CiSearch className='w-5' />
                            <input className='w-full outline-none placeholder:font-Poppin placeholder:text-[#4B5563]' type="text" placeholder='Search in products...'
                            />


                        </div>
                        <div className="navicons flex items-center gap-5.5  relative">
                            <button><FaRegUser className='w-6 h-6' /></button>
                            <button><MdOutlineShoppingCart className='w-6 h-6' />
                                <div className='w-5 h-5 bg-[#0EA5E9] rounded-full text-white flex items-center justify-center text-[16px] absolute bottom-[28px] right-[-3px]'>3</div>
                            </button>

                        </div>
                    </div>
                </div>

            </nav>

            {/* Mobile res */}
            <nav id='Navbar' className='py-[27px]  lg:hidden px-5 mb-2'>

                <div className="container">
                    <div className="navrow flex justify-between ">
                        <div className='imagediv flex  items-center'>
                            <Link to={'/'} className='navlogo'>
                                <img src={faveicon} alt="" />
                            </Link>
                        </div>
                        <div className="navSer w-[200px] h-[36px] bg-parmirycolor gap-2.5 rounded-[100px] p-6 flex text-[12px] items-center">
                            <CiSearch className='w-5' />
                            <input className='w-full outline-none placeholder:font-Poppin placeholder:text-[#4B5563]' type="text" placeholder='Search in products...'
                            />


                        </div>


                        <button onClick={()=>setShow(!show)} className=' text-xl '><TiThMenu /> 
                        </button>
                        {
                                show&&
                                
                                <div className="navicons flex items-center gap-5.5 absolute w-full top-[70px]  right-2 left-2 bg-gray-100 mt-2 justify-center p-2 rounded-[10px] ">
                                    <button><FaRegUser className='w-6 h-6' /></button>
                                    <button className=' relative'><MdOutlineShoppingCart className='w-6 h-6 ' />
                                        <div className='w-5 h-5 bg-[#0EA5E9] rounded-full text-white flex items-center justify-center text-[14px] absolute bottom-[15px] right-[-3px]'>3</div>
                                    </button>

                                </div>
                            }
                    </div>

                </div>

            </nav>
        </>

    )
}

export default Navbar
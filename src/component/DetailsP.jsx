import React, { useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { IoBagHandleOutline } from 'react-icons/io5'
import ReUseCon from './ReUseCon'
import logo2 from '../assets/images/image2.png'
import logo from '../assets/images/product-27-1 (4) 1 (2).png'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { WiStars } from "react-icons/wi";

const DetailsP = () => {

    const [image, setImage] = useState(logo2)
    const [size, setSize] = useState('')
    const [up, setUp] = useState(1)
    const navigate = useNavigate()
    const [product, setProuduct] = useState([])

   useEffect(() => {
    axios
      .get(
        'https://dummyjson.com/products?limit=4&skip=10&select=title,price,thumbnail,rating,category,discountPercentage'
      )
      .then((res) => {
        setProuduct(res.data.products);
      })
      .catch((err) => console.log(err));
}, []);
const handlar = () => {
    navigate('/details')
  }



    const carthandler = () => {
        setUp(up + 1)

    }
    const downhandler = () => {
        if (up > 1) {
            setUp(up - 1)
        } else {
            alert("minimun 1 product add to card")
        }
    }



    return (
        <>

            <section>
                <div className="container">
                    <div className='flex gap-8'>
                        <div>
                        {/* product image  */}
                        <div className='product_view flex gap-6'>
                            {/* littel image */}
                            <div>
                                <div className='w-[140px] h-[157px] hover:border-2 border-b-sky-600 rounded-2xl duration-[.4s] hover:shadow-2xl  shadow-blue-400 overflow-hidden bg-white'>
                                    <img className='bg-cover' src={logo} alt="" />

                                </div>
                                <div className='w-[140px] h-[157px] mt-4 hover:border-2 border-b-sky-600 rounded-2xl duration-[.4s] hover:shadow-2xl shadow-blue-400 overflow-hidden bg-white'>
                                    <img className='bg-cover' src={logo} alt="" />

                                </div>
                                <div onClick={() => setImage(logo)} className='w-[140px] h-[157px] mt-4 hover:border-2 border-b-sky-600 rounded-2xl duration-[.4s] hover:shadow-2xl shadow-blue-400 overflow-hidden bg-white'>
                                    <img className='bg-cover' src={logo} alt="" />

                                </div>
                                <button onClick={() => setImage('https://m.media-amazon.com/images/I/616jllf33ZL._AC_UY1000_.jpg')} className='w-[140px] h-[157px] mt-4 hover:border-2 border-b-sky-600 rounded-2xl duration-[.4s] hover:shadow-2xl shadow-blue-400 overflow-hidden bg-white'>
                                    <img className='bg-cover' src='https://m.media-amazon.com/images/I/616jllf33ZL._AC_UY1000_.jpg' alt="" />

                                </button>

                            </div>
                            {/* big image */}
                            <div className='w-[640px] h-[678px] bg-amber-100 relative group bg-cover overflow-hidden'>
                                <img className='bg-cover' src={image} alt="" />

                                <button className='h-9 w-9 flex justify-center items-center active:scale-[1.1] absolute bg-gray-300 text-black rounded-full active:scale-[1.1] group-hover:right-2 duration-[.4s] p-2 top-2 right-[-35px] '> <IoBagHandleOutline /></button>
                                <button className='h-8 w-[83px] flex justify-center items-center active:scale-[1.1] absolute bg-gray-300 text-black rounded-[10px] active:scale-[1.1] group-hover:left-2 duration-[.4s] p-2 top-2  left-[-100px] '> <IoBagHandleOutline /></button>


                            </div>

                           </div>
                            <section className=' py-[52px]'>
                                <div className=''>
                                    <div>
                                        <h2 className=' font-Poppin text-4xl w-[433px] h-[52px] font-semibold text-fontcol'>Black Automatic Watch</h2>
                                        <p className='w-[735px] h-[72px] Poppin textfont-base font-normal text-fontc'>The St. Louis Meramec Canoe Company was founded by Alfred Wickett in 1922.
                                             Wickett hadpreviously worked for the Old Town Canoe Co from 1900 to 1914.
                                             Manufacturing of the classicwooden canoes in Valley Park, Missouri ceased in 1978.</p>
                                    </div>
                                    <div className='mt-15'>
                                        <h2 className=' font-Poppin text-4xl w-[433px] h-[52px] font-semibold text-fontcol'>Fabric + Care</h2>
                                        <p className=' Poppin textfont-base font-normal text-fontc'>Material: Soft wool blend</p>
                                        <p className='Poppin textfont-base font-normal text-fontc'>Color: Various</p>
                                    </div>
                                    <div className='mt-15'>
                                        <h2 className=' font-Poppin text-4xl w-[433px] h-[52px] font-semibold text-fontcol'>Sale performance</h2>
                                        <p className=' Poppin textfont-base font-normal text-fontc'>Sales: 0</p>
                                        <p className='Poppin textfont-base font-normal text-fontc'>Review Count: -</p>
                                        <p className='Poppin textfont-base font-normal text-fontc'>Review Average: -</p>
                                    </div>
                                    <div className='mt-15 w-full'>
                                       
                                        <h2 className=' font-Poppin text-4xl w-[433px] h-[52px] font-semibold text-fontcol'>Keywords</h2>
                                        <div className='flex gap-2 justify-between'>
                                        <button className=' h-8 p-6.5 bg-gray-100 rounded-[100px] flex justify-between items-center gap-1'> <WiStars/> men's fashion</button>
                                       
                                        <button className=' h-8 p-6.5 bg-gray-100 rounded-[100px] flex justify-between items-center gap-1'> <WiStars/> winter hat</button>
                                        <button className=' h-8 p-6.5 bg-gray-100 rounded-[100px] flex justify-between items-center gap-1'> <WiStars/> colorful accessory</button>
                                        <button className=' h-8 p-6.5 bg-gray-100 rounded-[100px] flex justify-between items-center gap-1'> <WiStars/> warm headwear</button>
                                        </div>
                                    </div>
                                    

                                </div>
                            </section>

                        </div>

                        {/* Size select */}
                        <div >

                            <div className='p-[33px] w-[460px] h-[463px] bg-gray-100 rounded-2xl'>
                                <div className='flex justify-between'>
                                    <div>

                                        <h2 className='flex justify-center items-center gap-2'> <FaStar className='text-amber-300' /> 4.5 .<p>{`142 reviews`}</p></h2>
                                    </div>
                                    <div className=' relative'>
                                        <h1 className='font-Poppin font-semibold text-[24px] text-fontcol'>$169.99</h1>
                                        <p className='line-through absolute right-0'>$199.12</p>
                                    </div>
                                </div>

                                <div className='mt-8'>
                                    <h1 className='font-Poppin text-base font-semibold text-fontcol'>{`Size: ${size}`}</h1>
                                    <div className='Size-list flex justify-between '>
                                        <button onClick={() => setSize('S')} className={`w-17.5 h-11 active:scale-[1.1] mt-3 rounded-[12px] ${size === 'S' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>S</button>
                                        <button onClick={() => setSize('L')} className={`w-17.5 h-11 active:scale-[1.1] mt-3 rounded-[12px] ${size === 'L' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>L</button>
                                        <button onClick={() => setSize('M')} className={`w-17.5 h-11 active:scale-[1.1] mt-3 rounded-[12px] ${size === 'M' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>M</button>
                                        <button onClick={() => setSize('XL')} className={`w-17.5 h-11 active:scale-[1.1] mt-3 rounded-[12px] ${size === 'XL' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>XL</button>
                                        <button onClick={() => setSize('XXL')} className={`w-17.5 h-11 active:scale-[1.1] mt-3 rounded-[12px] ${size === 'XXL' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>XXL</button>

                                    </div>
                                </div>

                                <div className='up_down mt-8 flex  justify-between items-center'>
                                    <div className='flex  items-center gap-3'>
                                        <button onClick={downhandler} className='w-6 h-6 rounded-full text-[20px] flex justify-center items-center active:scale-[1.1]  bg-gray-500 '><p>-</p></button>
                                        <p className='text-[18px]'>{up}</p>
                                        <button onClick={carthandler} className='w-6 h-6 rounded-full text-[20px] flex justify-center items-center active:scale-[1.1]  bg-gray-500 '><p>+</p></button>


                                    </div>
                                    <div>
                                        <button className='bg-fontcol text-base font-Poppin font-normal rounded-full active:scale-[1.1] flex justify-between items-center text-white p-8 w-[178px] h-[52px]'><IoBagHandleOutline />Add to cart</button>
                                    </div>

                                </div>

                                <div className='mt-8'>
                                    <div className='flex justify-between'>
                                        <p className='font-Poppin text-base font-semibold text-fontc'>{`$169.99 x ${up}`}</p>
                                        <p className='font-Poppin text-base font-semibold text-fontc'>{(169.99 * up).toFixed(2)}</p>
                                    </div>
                                </div>

                                <div className='mt-8'>
                                    <div className='flex justify-between items-center'>
                                        <p className='font-Poppin text-base font-normal text-fontc'>Tax estimate</p>
                                        <p>$0</p>
                                    </div>
                                </div>
                                <div className='mt-8'>
                                    <div className='flex justify-between items-center'>
                                        <p className='font-Poppin text-base font-semibold text-fontcol'>Total</p>
                                        <p className='font-Poppin text-base font-semibold text-fontcol'>${169.99*up}</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                    <section className='mt-[96px] py-[85px]'>
                        <h1 className=' font-Poppin text-4xl  font-semibold text-fontcol'>Recommended products</h1>
                        <div className='flex gap-5 mt-10'>

                    {
                        product.map((item)=>(

                            <ReUseCon key={item.id}
                    thumbnail={item.thumbnail}
                    price={item.price}
                    title={item.title}
                    rating={item.rating}
                    category={item.category}
                    discountPercentage={item.discountPercentage}
                    discount={item.price - (item.price * item.discountPercentage / 100).toFixed(2)}
                    handlars={handlar}/>
                        ))
                    }
                    </div>
                    </section>
                   

                </div>
            </section>
        </>
    )
}

export default DetailsP
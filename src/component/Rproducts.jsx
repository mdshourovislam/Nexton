import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ReUseCon from './ReUseCon';
import image from '../assets/images/bg-image.png'

const Rproducts = () => {
  const [products, setProuduct] = useState([])
  const [scoproduct, setScoproduct] = useState([])
  useEffect(() => {
    axios.get('https://dummyjson.com/products?limit=4&skip=10&select=title,price,thumbnail,rating,category,discountPercentage')
      .then((res) => {
        setProuduct(res.data.products)
        console.log(res)


      })
      .catch((err) => console.log(err))



  }, [])

  useEffect(() => {
    axios.get('https://dummyjson.com/products?limit=4&skip=0&select=title,price,thumbnail,rating,category,discountPercentage')
      .then((res) => {
        setScoproduct(res.data.products)
        console.log(res)


      })
      .catch((err) => console.log(err))



  }, [])
  return (
    <>

      <section className='reproduct'>

        <div className="container py-[88px]">

          <div >
            <h2 className='font-Poppin font-semibold text-[36px] text-[#4B5563]'><span className='text-[#111827]
                     font-Poppin font-semibold text-[36px]'>Recommendations</span>. Best matching products for you</h2>

            <div className='flex gap-5 mt-5'>
              {
                products.map((item) => (
                  <ReUseCon
                    thumbnail={item.thumbnail}
                    price={item.price}
                    title={item.title}
                    rating={item.rating}
                    category={item.category}
                    discountPercentage={item.discountPercentage}
                    discount={item.price - (item.price * item.discountPercentage / 100).toFixed(2)} />
                ))
              }

            </div>
          </div>


        </div>

      </section>
      <section className='reproduct'>

        <div className="container py-[88px]">

          <div >
            <h2 className='font-Poppin font-semibold text-[36px] text-[#4B5563]'><span className='text-[#111827]
                     font-Poppin font-semibold text-[36px]'>Recommendations</span>. Best matching products for you</h2>

            <div className='flex gap-5 mt-5'>
              {
                scoproduct.map((item) => (
                  <ReUseCon
                    thumbnail={item.thumbnail}
                    price={item.price}
                    title={item.title}
                    rating={item.rating}
                    category={item.category}
                    discountPercentage={item.discountPercentage}
                    discount={item.price - (item.price * item.discountPercentage / 100).toFixed(2)} />
                ))
              }

            </div>
          </div>


        </div>

      </section>

      <section className='subbanner'>
        <div className="container py-[52px]">

          <div className=' bg-[#F5F5F5] flex justify-between rounded-[24px]'>
            <div className='py-[93px] w-[552px] px-[100px]'>

              <div >
                <p className='text-[20px] font-Poppin font-medium text-fontcol'>100% Original Products</p>
                <h2 className='text-[36px] w-[362px] font-Poppin line-clamp-none font-medium text-fontcol'>The All New Fashion Collection Items</h2>
                <p className='text-[20px] font-Poppin font-medium text-fontcol'>Starting from: $59.99</p>
                <button className='p-[25px] w-[144px] h-[52px] active:scale-[1.1] bg-fontcol text-[16px] font-medium flex justify-center items-center mt-6 text-white rounded-[100px]'>shop now</button>
              </div>
              
            </div>
            <div className=' right-[96px]'>
              <img src={image} alt="ofdg" />
            </div>

          </div>


        </div>

      </section>
    </>
  )
}

export default Rproducts
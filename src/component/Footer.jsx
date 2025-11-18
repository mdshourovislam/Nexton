import React from 'react'
import paypal from '../assets/images/paypal.png'
import stripe from '../assets/images/stripe.png'
import vias from '../assets/images/visa.png'
import verisign from '../assets/images/verisign.png'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router'
import facebook from '../assets/images/facebook.png'
import twitter from '../assets/images/twitter.png'
import youtube from '../assets/images/youtube.png'
import telegram from '../assets/images/telegram.png'

const Footer = () => {
    return (
        <>
            <section>
                <footer className='footer'>

                    <div className="container py-15">
                        <div className='flex justify-between'>
                            <div>

                                <Link to="/" className='navlogo'>
                                    <img src={logo} alt="" />
                                </Link>

                                <div >
                                    <a className='flex gap-2 mt-5' href="https://www.facebook.com/shourovislam2?__cft__[0]=AZX1TDmHG6RyeMehE-izvI7-jc2BttTpQQ1B0yiQk_B4OER7eF5s_Nf5sJ1Im0M6NPnbDt9R8jPt77DrjWRchxRCgsAbTRd3LQ3OTgu0Fvne29U4KzjTlgmxFUcuqe6wwXFaWOHnOOaGil-BrU04O2846Sp2So4IEd3v8tQx50KXGz4rXU8Bsb9jsru63egtYE8&__tn__=-UC%2CP-y0.g-R">

                                        <img className='w-5 h-5' src={facebook} alt="facebook image" />
                                        <h2 className='font-Poppin text-fontc text-[16px] font-normal'>Facebook</h2>
                                    </a>
                                </div>
                                <div >
                                    <a className='flex gap-2 mt-5' href="">

                                        <img className='w-5 h-5' src={youtube} alt="facebook image" />
                                        <h2 className='font-Poppin text-fontc text-[16px] font-normal'>Youtube</h2>
                                    </a>
                                </div>
                                <div >
                                    <a className='flex gap-2 mt-5' href="">

                                        <img className='w-5 h-5' src={telegram} alt="facebook image" />
                                        <h2 className='font-Poppin text-fontc text-[16px] font-normal'>Telegram</h2>
                                    </a>
                                </div>
                                <div >
                                    <a className='flex gap-2 mt-5' href="">

                                        <img className='w-5 h-5' src={twitter} alt="facebook image" />
                                        <h2 className='font-Poppin text-fontc text-[16px] font-normal'>Twitter</h2>
                                    </a>
                                </div>
                            </div>
                            <div>

                              <h1 className='font-Poppin text-[16px] text-black font-semibold'>Getting started</h1>

                                <div >
                                    <a className='flex gap-2 mt-5' href="https://www.facebook.com/shourovislam2?__cft__[0]=AZX1TDmHG6RyeMehE-izvI7-jc2BttTpQQ1B0yiQk_B4OER7eF5s_Nf5sJ1Im0M6NPnbDt9R8jPt77DrjWRchxRCgsAbTRd3LQ3OTgu0Fvne29U4KzjTlgmxFUcuqe6wwXFaWOHnOOaGil-BrU04O2846Sp2So4IEd3v8tQx50KXGz4rXU8Bsb9jsru63egtYE8&__tn__=-UC%2CP-y0.g-R">

                                        <h2 className='font-Poppin text-fontc text-[16px] font-normal'>Release Notes</h2>
                                    </a>
                                </div>
                                <div >
                                    <a className='flex gap-2 mt-5' href="">

                                       
                                        <h2 className='font-Poppin text-fontc text-[16px] font-normal'>Upgrade Guide</h2>
                                    </a>
                                </div>
                                <div >
                                    <a className='flex gap-2 mt-5' href="">

                                        <h2 className='font-Poppin text-fontc text-[16px] font-normal'>Browser Support</h2>
                                    </a>
                                </div>
                                <div >
                                    <a className='flex gap-2 mt-5' href="">

                                       
                                        <h2 className='font-Poppin text-fontc text-[16px] font-normal'>Dark Mode</h2>
                                    </a>
                                </div>
                            </div>
                            <div>

                                <h1 className='font-Poppin text-[16px] text-black font-semibold'>Explore</h1>

                                <div >
                                    <a className='flex gap-2 mt-5' href="https://www.facebook.com/shourovislam2?__cft__[0]=AZX1TDmHG6RyeMehE-izvI7-jc2BttTpQQ1B0yiQk_B4OER7eF5s_Nf5sJ1Im0M6NPnbDt9R8jPt77DrjWRchxRCgsAbTRd3LQ3OTgu0Fvne29U4KzjTlgmxFUcuqe6wwXFaWOHnOOaGil-BrU04O2846Sp2So4IEd3v8tQx50KXGz4rXU8Bsb9jsru63egtYE8&__tn__=-UC%2CP-y0.g-R">

                                        <h2 className='font-Poppin text-fontc text-[16px] font-normal'>Prototyping</h2>
                                    </a>
                                </div>
                                <div >
                                    <a className='flex gap-2 mt-5' href="">

                                
                                        <h2 className='font-Poppin text-fontc text-[16px] font-normal'>Design systems</h2>
                                    </a>
                                </div>
                                <div >
                                    <a className='flex gap-2 mt-5' href="">

                                        <h2 className='font-Poppin text-fontc text-[16px] font-normal'>Pricing</h2>
                                    </a>
                                </div>
                                <div >
                                    <a className='flex gap-2 mt-5' href="">

                                        
                                        <h2 className='font-Poppin text-fontc text-[16px] font-normal'>Security</h2>
                                    </a>
                                </div>
                            </div>
                            <div>

                                 <h1 className='font-Poppin text-[16px] text-black font-semibold'>Community</h1>
                                <div >
                                    <a className='flex gap-2 mt-5' href="">

                                        
                                        <h2 className='font-Poppin text-fontc text-[16px] font-normal'>Discussion Forums</h2>
                                    </a>
                                </div>
                                <div >
                                    <a className='flex gap-2 mt-5' href="">

                                        
                                        <h2 className='font-Poppin text-fontc text-[16px] font-normal'>Code of Conduct</h2>
                                    </a>
                                </div>
                                <div >
                                    <a className='flex gap-2 mt-5' href="">

                                        <h2 className='font-Poppin text-fontc text-[16px] font-normal'>Contributing</h2>
                                    </a>
                                </div>
                                <div >
                                    <a className='flex gap-2 mt-5' href="">

                                        
                                        <h2 className='font-Poppin text-fontc text-[16px] font-normal'>API Reference</h2>
                                    </a>
                                </div>
                            </div>


                        </div>
                        <div className='py-9 flex justify-between items-center'>
                            <h1 className='text-[16px] font-Poppin font-normal text-fontc'>Nexton eCommerce. © 2025</h1>
                            <div className='flex gap-1'>
                                <button className='w-[56px] h-[32px]'><img src={vias} alt="" /></button>
                                <button className='w-[56px] h-[32px]'><img src={paypal} alt="" /></button>
                                <button className='w-[56px] h-[32px]'><img src={stripe} alt="" /></button>
                                <button className='w-[56px] h-[32px]'><img src={verisign} alt="" /></button>

                            </div>

                        </div>

                    </div>

                </footer>
            </section>
        </>
    )
}

export default Footer
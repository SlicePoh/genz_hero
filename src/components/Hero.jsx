import React from 'react'
import s, { layout } from '../style'
import { motion } from 'framer-motion'
import slide1 from '../assets/product/slide1.png'
import slide2 from '../assets/product/slide2.png'
import slide3 from '../assets/product/slide3.png'
import slide4 from '../assets/product/slide4.png'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

export const Hero = () => {
    return (
        <div className={`min-h-screen pt-20 overflow-hidden`}>
            <div className={`${s.flexBetween} bg-violet-1 h-40 py-8 px-16`}>
                <div className={`${s.flexCenter} flex-col  `}>
                    <div className="text-5xl font-stencil">
                        Use Code
                        <span className="font-bold"> DIWALI25 </span>
                        and get 
                        <span className="font-bold"> 50% off</span>
                    </div>
                    <div className="text-white text-3xl mt-6 ml-10">1st-11th November</div>
                </div>
                <button className=" bg-black px-8 py-3 text-white font-bold text-2xl rounded-xl">
                    Shop Now
                </button>
            </div>
            <div className={`${s.flexCenter} h-[600px] bg-banner bg-cover `}>
                
            </div>
            <div className="carousel py-10" >
                {/* <button className="">
                    <AiOutlineLeft />
                </button>
                <button className="">
                    <AiOutlineRight />
                </button> */}
                <motion.ul data-slides className={`flex gap-8 overflow-hidden w-fit px-5`}>
                    <motion.li className=''>
                        <img src={slide1} alt="slide1" className={`${layout.slide} `} />
                    </motion.li>
                    <motion.li className=''>
                        <img src={slide2} alt="slide2" className={`${layout.slide} `} />
                    </motion.li>
                    <motion.li className=''>
                        <img src={slide3} alt="slide3" className={`${layout.slide} `} />
                    </motion.li>
                    <motion.li className=''>
                        <img src={slide4} alt="slide4" className={`${layout.slide} `} />
                    </motion.li>
                </motion.ul>
            </div>
            
        </div>
    )
}

import React, { useState } from 'react'
import s, { layout } from '../style'
import { motion } from 'framer-motion'
import slide1 from '../assets/product/slide1.png'
import slide2 from '../assets/product/slide2.png'
import slide3 from '../assets/product/slide3.png'
import slide4 from '../assets/product/slide4.png'
import bannerModel from '../assets/bannerModel.png'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { prod } from '../data/prod'



export const Hero = () => {
    const [likes, setLikes] = useState(Array(prod.length).fill(false));

    const handleLike = (index) => {
        setLikes((prevLikes) => {
            const updatedLikes = [...prevLikes];
            updatedLikes[index] = !updatedLikes[index];
            return updatedLikes;
        });
    };
    return (
        <div className={`min-h-screen pt-20 overflow-hidden z-20`}>
            <div className={`${s.flexBetween} bg-yellow-1 h-24 md:h-40 py-8 px-5 md:px-16 lg:px-32`}>
                <div className={`z-10 ${s.flexStart} flex-col text-sm sm:text-lg md:text-2xl font-extrabold font-sync`}>
                    <span>DIWALI</span>
                    <span>BLOCKBUSTER</span>
                    <span>DEAL</span>
                </div>
                <div className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl absolute text-black/20 font-neo text-center z-0 tracking-wider ml-0 sm:ml-[1em] lg:ml-[2em]">Diwali Sale</div>
                <button className="z-10  bg-blue-1 px-2 md:px:8 lg:px-14 py-3 text-black font-bold font-sync text-xs sm:text-lg md:text-2xl rounded-lg">
                    FLAT 50% OFF
                </button>
                <div className={`z-10 ${s.flexSS} overflow-hidden hidden sm:flex`}>
                    <img src={bannerModel} alt="bannerModel" className='w-full h-24 md:h-40 object-contain' />
                </div>
            </div>

            <div className={`${s.flexCenter} h-[600px] bg-banner bg-cover `}>
            </div>

            <motion.div className={`${s.flexCenter} flex-wrap gap-8 overflow-hidden w-full py-10 px-5`}>
                <motion.div className=''>
                    <img src={slide1} alt="slide1" className={`${layout.slide} `} />
                    <div className="text-center text-2xl -translate-y-10 font-bold">DENIMS</div>
                </motion.div>
                <motion.div className=''>
                    <img src={slide2} alt="slide2" className={`${layout.slide} `} />
                    <div className="text-center text-2xl -translate-y-10 font-bold">SKIRTS</div>
                </motion.div>
                <motion.div className=''>
                    <img src={slide3} alt="slide3" className={`${layout.slide} `} />
                    <div className="text-center text-2xl -translate-y-10 font-bold">CO-ORDS</div>
                </motion.div>
                <motion.div className=''>
                    <img src={slide4} alt="slide4" className={`${layout.slide} `} />
                    <div className="text-center text-2xl -translate-y-10 font-bold">TOPS</div>
                </motion.div>
            </motion.div>
            
            <motion.div 
            animate={{
                rotate: 3
            }}
            className={`${s.flexCenter} flex-col w-full bg-yellow-1 my-10 z-10 absolute overflow-hidden`}>
                <div className="font-sync font-bold text-sm md:text-3xl w-full py-1 md:py-2 animate-marquee whitespace-nowrap ">
                    <span> SALE IS LIVE ! FREE SHIPPIng on all orders above rs. 399. |</span>
                    <span> SALE IS LIVE ! FREE SHIPPIng on all orders above rs. 399. |</span>
                </div>

            </motion.div>
            <motion.div 
            animate={{
                translatey: -10, 
                rotate: -3
            }}
            className={`${s.flexCenter} flex-col w-full bg-yellow-1 bg-opacity-20 my-10 z-0`}>
                <div className="font-sync font-bold text-sm md:text-3xl w-full py-1 md:py-2 animate-marquee whitespace-nowrap ">
                    <span> SALE IS LIVE ! FREE SHIPPIng on all orders above rs. 399. |</span>
                    <span> SALE IS LIVE ! FREE SHIPPIng on all orders above rs. 399. |</span>
                </div>

            </motion.div>

            <div className={`${s.flexCenter} flex-col`}>
                <div className="text-2xl font-semibold mb-10">BESTSELLERS</div>
                <div className={`${s.flexCenter} flex-wrap gap-8 overflow-hidden w-fit px-5`}>
                    {prod.map((product, index) => (
                        <div key={index} className={`${s.flexCenter} flex-col`}>
                            <img src={product.pic} alt={product.name} className={`${layout.prod} `} />
                            <div className={`${s.flexBetween} w-full px-5 my-2`}>
                                <div className={`${s.flexStart} flex-col`}>
                                    <div className="text-gray-400 font-semibold">{product.type}</div>
                                    <div className="my-1">{product.name}</div>
                                    <div className={`${s.flexSS} font-bold gap-3`}>
                                        <div className="">₹{product.price}</div>
                                        <div className="font-medium text-gray-400 line-through">₹{product.oldPrice}</div>
                                        <div className="text-green-600 font-bold">{product.discount} OFF</div>
                                    </div>
                                </div>
                                {likes[index] ? (
                                    <AiFillHeart
                                        onClick={() => handleLike(index)}
                                        className="text-2xl text-red-600 cursor-pointer"
                                    />
                                ) : (
                                    <AiOutlineHeart
                                        onClick={() => handleLike(index)}
                                        className="text-2xl cursor-pointer"
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="my-2 w-full bg-red-1 text-lg md:text-5xl py-5 font-medium text-center">
                100% MADE IN INDIA BRAND
            </div>
        </div>
    )
}

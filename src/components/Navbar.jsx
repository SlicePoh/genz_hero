import React, { useState } from 'react'
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { BiSearchAlt } from 'react-icons/bi'
import { MdOutlineFace } from 'react-icons/md'
import {IoReorderThree} from 'react-icons/io5'
import {RxCross1} from 'react-icons/rx'
import s from '../style'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    const [open,setOpen]=useState()
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
      setIsActive(isActive => !isActive);
    };

    return (
        <div className={`${s.flexBetween} fixed w-full h-20 z-20 bg-white flex-wrap p-3 md:px-8`} >
            <div className="md:hidden">
                <button onClick={handleClick} className={isActive ? `hidden` :`text-2xl md:text-4xl text-green-2`}>
                <IoReorderThree/>
                </button>
                <button onClick={handleClick} className={isActive ? `text-2xl md:text-4xl text-green-2`:`hidden`}>
                <RxCross1/>
                </button>
            </div>
            <motion.div className={isActive? ` rounded-lg flex md:hidden flex-col justify-center items-center fixed w-3/5 h-auto p-5 bg-violet-1 `: `hidden`}
                animate={{ 
                x: 50,
                y: 110
                }}
            >
                <Link to="/men" className="font-bold text-xl hover:border-b-2 border-b-2 w-full text-center border-gray-700">
                    Men
                </Link>
                <Link to="/women" className="font-bold text-xl hover:border-b-2 border-b-2 w-full text-center border-gray-700">
                    Women
                </Link>
                <Link to="/kids" className="font-bold text-xl hover:border-b-2 w-full text-center border-gray-700">
                    Kids
                </Link>
            </motion.div>
            <Link to="/" className='flex items-center'>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold font-sync drop-shadow-xl ">QUIRK</div>
            </Link>
            <div className={`${s.flexCenter} gap-4 hidden md:flex`}>
                <Link to="/men" className="font-bold text-xl hover:border-b-2">
                    Men
                </Link>
                <Link to="/women" className="font-bold text-xl hover:border-b-2">
                    Women
                </Link>
                <Link to="/kids" className="font-bold text-xl hover:border-b-2">
                    Kids
                </Link>
            </div>
            <div className="flex items-center text-lg md:text-2xl ">
                <div className={`${s.flexCenter}  mr-4 rounded-lg w-full h-10 hidden sm:flex`}>
                    {open ?(
                        <input placeholder="What are you looking for?" className="w-56 text-lg bg-inherit p-1 " />
                    ):(
                        <input placeholder="What are you looking for?" className="w-56 invisible text-lg bg-inherit p-1  " />
                    )}
                    <button onClick={()=>setOpen(!open)} >
                        <BiSearchAlt className=""/>
                    </button>
                </div>
                <div className="flex gap-4">
                    <button>
                        <AiOutlineHeart />
                    </button>
                    <button>
                        <AiOutlineShoppingCart />
                    </button>
                    <button>
                        <MdOutlineFace/>
                    </button>
                </div>

            </div>
        </div>
    )
}

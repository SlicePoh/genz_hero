import React, { useState } from 'react'
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { BiSearchAlt } from 'react-icons/bi'
import { MdOutlineFace } from 'react-icons/md'
import s from '../style'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    const [open,setOpen]=useState()
    return (
        <div className={`${s.flexBetween} fixed w-full h-20 z-40 flex-row bg-white flex-wrap p-3 md:px-8`} >
            <Link to="/" className='flex items-center'>
                <div className="text-xl md:text-2xl lg:text-4xl font-extrabold font-stencil">QUIRK</div>
            </Link>
            <div className={`${s.flexCenter} gap-4`}>
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
                <div className={`${s.flexCenter} sm:flex mr-4 rounded-lg w-full h-10 `}>
                    {open ?(
                        <input placeholder="What are you looking for?" className="w-56 text-lg bg-inherit p-1 " />
                    ):(
                        <input placeholder="What are you looking for?" className="w-56 invisible text-lg bg-inherit p-1  " />
                    )}
                    <button onClick={()=>setOpen(!open)} >
                        <BiSearchAlt className=""/>
                    </button>
                </div>
                <button className="flex  gap-4">
                    <AiOutlineHeart />
                    <AiOutlineShoppingCart />
                    <MdOutlineFace/>
                </button>

            </div>
        </div>
    )
}

"use client"

import Image from 'next/image'
import Link from 'next/link'
import {useState} from 'react'
import Navlist from './navlist'
import { motion } from 'framer-motion'
const links=[
    {url:'/',title:'Home'},
    {url:'/about',title:'About'},
    {url:'/portfolio',title:'Portfolio'},
    {url:'/contact',title:'Contact'}
]

const Navbar = () => {
    const [open, setOpen] = useState(false)

     const topVarient={
        closed:{
            rotate:0,
        },
        opened:{
            rotate:45,
            backgroundColor:"rgb(255,255,255)"
        }
     }

     const centerVarient={
        closed:{
            opacity:1,
        },
        opened:{
            opacity:0,
        }
     }
     const bottomVarient={
        closed:{
            rotate:0,
        },
        opened:{
            rotate:-45,
            backgroundColor:"rgb(160,32,240)"
        }
     }

     const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "-100%" },
      }


  return (
    <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl' >
        {/* {logo hidden} */}
        <div className='hidden md:flex gap-4 w-1/3' >
        {links.map((link) =>(
                    <Navlist link={link} key={link.title} />
                ))}
        </div>

        {/* {logo} */}
      <div className='md:hidden ld:flex xl:w-1/3 xl:justify-center' >
        <Link
            href='/'
            className='text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center'
        >
            <span className='text-white mr-1'>Lama</span>
            <span className='w-12 h-8 rounded bg-white text-black flex items-center justify-center'>.dev</span>
        </Link>
      </div>
      {/* Social */}
      <div className='hidden md:flex gap-4 w-1/3' >
        <Link href='/https://github.com/RajaOsama08/next-animated-portfolio' >
            <Image src='/github.png' alt='github' width='24' height='24' />
        </Link>
        <Link href='#' >
            <Image src='/dribbble.png' alt='github' width='24' height='24' />
        </Link>
        <Link href='#' >
            <Image src='/instagram.png' alt='github' width='24' height='24' />
        </Link>
        <Link href='#' >
            <Image src='/facebook.png' alt='github' width='24' height='24' />
        </Link>
        <Link href='#' >
            <Image src='/pinterest.png' alt='github' width='24' height='24' />
        </Link>
        <Link href='#' >
            <Image src='/linkedin.png' alt='github' width='24' height='24' />
        </Link>

      </div>

      {/* {responsive menu} */}
      <div className='md:hidden'>
        {/* menu button  */}
         <button className='w-10 h-8 flex flex-col justify-between z-50 relative' onClick={()=>setOpen(!open)} >
            {console.log(open)}
            <motion.div varients={topVarient} animate={open ? "opened" : "closed"} className='w-10 h-1 bg-white rounded origin-left'></motion.div>
            <motion.div varients={centerVarient} animate={open ? "opened" : "closed"} className='w-10 h-1 bg-white rounded'></motion.div>
            <motion.div varients={bottomVarient} animate={open ? "opened" : "closed"} className='w-10 h-1 bg-white rounded origin-left'></motion.div>
         </button>
         {open && (
            <div className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl' >
                {links.map((link) =>(
                    <Link href={link.url} key={link.title} >
                        {link.title}
                    </Link>
                ))}
            </div>
         )}
      </div>
    </div>
  )
}

export default Navbar

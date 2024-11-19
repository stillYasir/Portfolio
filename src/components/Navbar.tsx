import React from 'react'
import { TiThMenuOutline } from "react-icons/ti";


const Navbar = () => {
  return (
    <div className='container pt-8'>
        <div className='flex justify-between items-center'>
            <div className='text-xl font-medium'>Yasir Kashif</div>
            <ul className='gap-10 lg:gap-16 hidden md:flex'>

              <li className='menulink'><a href='#home'>Home</a></li>
              <li className='menulink'><a href='#about'>About</a></li>
              <li className='menulink'><a href='#projects'>Projects</a></li>
              <li className='menulink'><a href='#skills'>Skills</a></li>
              <li className='menulink'><a href='#contact'>Contact</a></li>
            </ul>
            <TiThMenuOutline  className='md:hidden' size={30}/>
        </div>



    </div>
  )
}

export default Navbar
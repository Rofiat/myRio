
// import logow from '../../../images/logow.svg'


import React, { useState } from 'react'
import logow from '../../../images/logow.svg'


const HomeHeader = ({setModal}) => {
    let Links =[
      {name:"About us",link:"/"},
      {name:"Faqs",link:"/"},
      {name:"Contact us",link:"/"},
    ];
    let [open,setOpen]=useState(false);

  return (
    <div className='bg-black w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between py-4 md:px-5'>
      <div style={{paddingLeft:'50px'}}>
        <img src={logow} alt="rio logo" />
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'} style={{color:'white'}}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute text-white md:static bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-4 text-l md:my-0 my-5 mx-5'>
              <a href={link.link} className='text-white hover:text-blue-400 duration-500'>{link.name}</a>
            </li>
          ))
        }
        <button onClick={() => setModal(true)} type="button" className='bg-white border border-slate-300 shadow-md shadow-[#1DB0A4] text-black w-[200px] font-medium my-6 mx-auto md:mx-0 py-3'>Join Waitlist</button>
      </ul>
      
      </div>

</div>
)} 

export default HomeHeader
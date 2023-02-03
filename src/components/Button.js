import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-white text-black py-2 px-6 md:ml-8 hover:bg-white
    duration-600'>
      {props.children}
    </button>
  )
}

export default Button
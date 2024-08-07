import React from 'react'
import Nav from './Nav'
import Dropdown from './Dropdown'
import Middle from './Middle'

function Home() {
  return (
 <>
 <div className=' bg-blue-700 w-full h-7 flex justify-around'>
<div className='flex justify-between'>
<img className=' ' src="https://diccdnmedia.digitalindiacorporation.in/wp-content/themes/tanda/assets/images/ind-flag.svg" alt="india" />
<p className='pl-2 text-white font-bold'> भारत सरकार | Government of India</p>
</div>
<div className='flex justify-between '>
<div className='flex justify-around'>
  <p className='pl-3'>
  Screen Reader Access
  </p>
  <p>
  Skip to content
  </p>
</div>
<div className='pl-6'>
<Dropdown name='Language'></Dropdown>
</div>
</div>
 </div>
 
 <Nav></Nav>
 <Middle></Middle>
 </>
  )
}

export default Home

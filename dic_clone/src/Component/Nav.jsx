import React from 'react'
import ArrowDownLineIcon from '@rsuite/icons/ArrowDownLine';
import SearchIcon from '@rsuite/icons/Search';
import Dropdown from './Dropdown';
function Nav() {
  return (
   <>
   <div className='w-full h-15 bg-white  flex justify-between'>
    <div className='pl-5'>
<img src="https://dicmedia.digitalindiacorporation.in/toplogo-4.png" alt="" />
    </div>
<div className='grid grid-cols-7 pt-5 gap-3'>
<Dropdown name='About'/>
<Dropdown name='Initiatives'/>
<Dropdown name='Divisions'/>
<Dropdown name='Notification'/>
<Dropdown name='Careers'/>
<Dropdown name='RTI'/>
 <div>
  <SearchIcon></SearchIcon>
 </div>
</div>
   </div>
   </>
  )
}

export default Nav
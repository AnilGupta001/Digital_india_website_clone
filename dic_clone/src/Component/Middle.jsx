import React, { useEffect, useState } from 'react'

function Middle() {
    const arr=['https://diccdnmedia.digitalindiacorporation.in/wp-content/uploads/2023/08/umang-1.png',
        'https://diccdnmedia.digitalindiacorporation.in/wp-content/uploads/2023/06/diksha.png',
        'https://diccdnmedia.digitalindiacorporation.in/wp-content/uploads/2023/06/india-Handmade-1.jpg',
        'https://diccdnmedia.digitalindiacorporation.in/wp-content/uploads/2024/02/ncw-1r-1.png',
        'https://diccdnmedia.digitalindiacorporation.in/wp-content/uploads/2023/08/umang-1.png',
        'https://diccdnmedia.digitalindiacorporation.in/wp-content/uploads/2024/06/LokOS-Banner.jpg'
    ];
    const [start,running]=useState(0)
    useEffect(()=>{
     const  inter= setInterval(() => {
                running((pre)=>{
                    pre+1%arr.length})
            }, 2000);
     return ()=>{
        clearInterval(inter) 
     }
    })
  return (
    <div>
<img src={arr[start]} alt="" />
    
    </div>
  )
}

export default Middle
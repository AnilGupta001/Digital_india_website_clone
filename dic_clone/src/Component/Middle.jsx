import React, { useEffect, useState } from 'react';
import ArrowRightLineIcon from '@rsuite/icons/ArrowRightLine';
import ArrowLeftLineIcon from '@rsuite/icons/ArrowLeftLine';

function Middle() {

    const arr = [
        'https://diccdnmedia.digitalindiacorporation.in/wp-content/uploads/2023/08/umang-1.png',
        'https://diccdnmedia.digitalindiacorporation.in/wp-content/uploads/2023/06/diksha.png',
        'https://diccdnmedia.digitalindiacorporation.in/wp-content/uploads/2023/06/india-Handmade-1.jpg',
        'https://diccdnmedia.digitalindiacorporation.in/wp-content/uploads/2024/02/ncw-1r-1.png',
        'https://diccdnmedia.digitalindiacorporation.in/wp-content/uploads/2023/08/umang-1.png',
        'https://diccdnmedia.digitalindiacorporation.in/wp-content/uploads/2024/06/LokOS-Banner.jpg',
        'https://diccdnmedia.digitalindiacorporation.in/wp-content/uploads/2023/08/digilocker-HP.png',
        'https://dicmedia.digitalindiacorporation.in/digital-india-moving.webm'
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % arr.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [arr.length]);

    return (
        <>
        <div className="relative">
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
                <button 
                    className='bg-blue-950 rounded-full p-2'
                    onClick={() => setCurrentIndex((prevIndex) => (prevIndex === 0 ? arr.length - 1 : prevIndex - 1))}
                >
                    <ArrowLeftLineIcon size='2em' />
                </button>
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                <button 
                    className='bg-blue-950 rounded-full p-2'
                    onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % arr.length)}
                >
                    <ArrowRightLineIcon size='2em' />
                </button>
            </div>
            {currentIndex === 7 ? (
                <video src={arr[currentIndex]} autoPlay loop className="w-full h-auto" />
            ) : (
                <img className="w-full h-auto" src={arr[currentIndex]} alt={`Slide ${currentIndex}`} />
            )}
            <div className='flex justify-center items-center w-full absolute bottom-1/4  space-x-2  rounded-2xl pt-2'>
                {arr.map((item, index) => (
                    <button 
                        className={`w-4 h-4 rounded-full bg-black hover:bg-green-950 `} 
                        key={index}
                    ></button>
                ))}
            </div>
        </div>
<div className='bg-gray-400 rounded-md flex justify-around'>
    <div className='flex justify-center items-center'>
        <p className='text-center'>WHAT'S NEW</p>
    </div>
    <div className='grid grid-cols-3 gap-4 p-4'>
        <div className='rounded-full bg-blue-950'>
<ArrowLeftLineIcon/>

        </div>
        <div>
Some new Text
        </div>
        <div className='rounded-full bg-blue-950'>
<ArrowRightLineIcon/>
        </div>
        </div>
        <div>
        <div className='pt-1'>
<button className=' border-red-300 rounded-lg p-3 bg-red-400'>→View All</button>
        </div>
    </div>
</div>
<div>
<div 
  style={{
    backgroundImage: 'url(https://diccdnmedia.digitalindiacorporation.in/wp-content/themes/tanda/assets/images/abst_bg.svg)'
  }} 
  className='flex justify-center items-center p-2'
>

        <p className='font-bold text-3xl'>What We DO</p>
    </div>
    <div className='flex justify-center items-center p-5 w-auto'>
        <p className='font-thin text-gray-800 text-center w-80'>Digital India Corporation (DIC) leads and guides in realizing the vision, objectives and goals of the Digital India program. It provides the strategic support to Ministries/Departments of Centre/States for carrying forward the mission of Digital India by way of Capacity Building for e-Governance projects, promoting best practices, encouraging Public-Private Partnerships (PPP), nurturing innovation and technology in various domains.</p>
    </div>
    <div className='grid grid-cols-5 p-5 rounded-2xl bg-gray-800'>
  {
    ['Digital Infrastructure', 'Health', 'Education', 'Livelihood', 'Social Empowerment'].map((item, index) => (
      <button
        key={index}
        className={`p-1 rounded-2xl font-bold ${((setInterval(()=>{index+1},1000)))?'bg-red-400':'bg-white'}`}
      >
        {item}
      </button>
    ))
  }
</div>


</div>
      </>
    ); 
}

export default Middle;
 
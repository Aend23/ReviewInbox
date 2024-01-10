import React from 'react'
import img1 from '../assets/react.svg'
export default function Avaiable() {
    return (
        <div>
            <div id='totalcontent w-[520px] h-full'>
                <div id='content' className='overflow-hidden z-1 bg-white  flex  left-1/3 rounded-2xl  top-4  flex-wrap h-full' >
                    <div className='flex relative rounded-t-2xl bg-[#f2f2f3] w-[100%] pl-11 p-2.5'>
                       
                        <h1 className='  font-bold text-[#6b6b6b] flex'> See my availability : today</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 absolute h-5 my-[3.2px]  right-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                        </svg>

                    </div>
                    <div className=' text-left w-[100%] px-8 pt-7'>
                        <h1 className=' font-bold text-2xl py-2'>Available until 1 PM</h1>
                        <p className='w-[50%]'>Would you like to create an event for coffee with Marisa at 11 AM?</p>
                        <div className='flex '>
                            {/* <img src={img1} className='  my-4 rounded-2xl w-[100%] h-[20%]'></img> */}
                        </div>

                        <hr className=' relative mt-3 w-[100%]'></hr>
                        <div className=' w-[100%] space-x-3 my-4 font-semibold text-[#6b6b6b]'>
                            <button className=' bg-[#f2f2f3] p-2.5 px-4 rounded-2xl '>Create Event</button>
                            <button className=' bg-[#f2f2f3] p-2.5 px-4 rounded-2xl'>Edit Event</button>
                            <button className=' bg-[#f2f2f3] p-2.5 px-4 rounded-2xl '>Full Calendar</button>
                            <button className='   p-2.5 px-8 rounded-2xl '>Dismiss</button>

                        </div>

                        <p className=' cursor-pointer flex py-2 mb-2 text-[#6b6b6b] '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 my-1 mr-2">
                            <path strokeLinecap="round" trokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                        </svg>
                            More actions
                        </p>
                    </div>

                </div>

            </div>
        </div>
    )
}


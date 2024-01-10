import React from 'react'

export default function Map() {
    return (
        <div>
            <div id='totalcontent'>
                <div id='content' className='overflow-hidden z-1 bg-white flex  left-1/3 rounded-2xl  top-4  flex-wrap' >
                    <div className='flex relative rounded-t-2xl bg-[#f2f2f3] w-[100%] pl-11 p-2.5'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>


                        <h1 className=' w-auto  ml-3 font-bold text-[#6b6b6b] flex'> Starbucks<p className='px-2 text-sm my-0.5  opacity-40'>· Location</p></h1>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 absolute h-5 my-[3.2px]  right-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                        </svg>

                    </div>
                    <div className=' text-left w-[100%] px-8 pt-7'>
                        <iframe
                            className=' w-[100%] relative flex rounded-2xl  h-[40%]'
                            title="Google Maps"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29436.173525689082!2d75.89770357431644!3d22.74601290000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e35cb63d60b3%3A0x2d10148e8aa61263!2sStarbucks!5e0!3m2!1sen!2sin!4v1704589270735!5m2!1sen!2sin"
                            width="600"
                            height="450"
                            style={{ border: '0' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <h1 className=' font-bold text-2xl py-2'>Coffee?</h1>
                        <p className=' py-2 text-[#6b6b6b] font-semibold text-xl'>Custom Blended Java in a casual setting</p>
                        <p className=' text-[#481f00] font-semibold opacity-50'>20445 Steven lane</p>
                        <p className='text-[#481f00] font-semibold opacity-50'>Cupertino, CA 9630</p>
                        
                        <hr className=' relative mt-3 w-[100%]'></hr>
                        <div className=' w-[100%] space-x-3 my-4 font-semibold text-[#6b6b6b]'>
                            <button className=' bg-[#f2f2f3] p-2.5 px-7 rounded-2xl '>Reply</button>
                            <button className=' bg-[#f2f2f3] p-2.5 px-7 rounded-2xl'>Forward</button>
                            <button className=' bg-[#f2f2f3] p-2.5 px-7 rounded-2xl '>Delete</button>

                        </div>

                        <p className=' cursor-pointer flex py-2 mb-2 pb-11 text-[#6b6b6b] '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 my-1 mr-2">
                            <path sstrokeLinecap="round" trokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                        </svg>
                            More actions
                        </p>
                    </div>

                </div>

            </div>
        </div>
    )
}

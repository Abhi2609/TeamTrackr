import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='flex items-center justify-start gap-3 flex-nowrap overflow-x-auto h-[50%] w-full py-5 mt-10'>
        <div className='flex-shrink-0 h-full w-[300px] bg-blue-900 rounded-xl'>
            <div className='flex justify-between items-center p-3'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20 Jan 2025</h4>
            </div>
            <h2 className='mt-2 text-2xl px-3 font-semibold'>Make a video</h2>
            <p className='text-sm mt-1 px-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt repudiandae consectetur soluta quae praesentium.</p>
        </div>
        <div className='flex-shrink-0 h-full w-[300px] bg-blue-700 rounded-xl'>
            <div className='flex justify-between items-center p-3'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20 Jan 2025</h4>
            </div>
            <h2 className='mt-2 text-2xl px-3 font-semibold'>Make a video</h2>
            <p className='text-sm mt-1 px-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt repudiandae consectetur soluta quae praesentium.</p>
        </div>
        <div className='flex-shrink-0 h-full w-[300px] bg-violet-700 rounded-xl'>
            <div className='flex justify-between items-center p-3'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20 Jan 2025</h4>
            </div>
            <h2 className='mt-2 text-2xl px-3 font-semibold'>Make a video</h2>
            <p className='text-sm mt-1 px-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt repudiandae consectetur soluta quae praesentium.</p>
        </div>
        <div className='flex-shrink-0 h-full w-[300px] bg-violet-900 rounded-xl'>
            <div className='flex justify-between items-center p-3'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20 Jan 2025</h4>
            </div>
            <h2 className='mt-2 text-2xl px-3 font-semibold'>Make a video</h2>
            <p className='text-sm mt-1 px-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt repudiandae consectetur soluta quae praesentium.</p>
        </div>
    </div>
  )
}

export default TaskList

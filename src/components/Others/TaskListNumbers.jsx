import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='mt-8 flex justify-between gap-5 screen'>
        <div className='w-[30%] px-5 py-8 rounded-xl bg-blue-400'>
            <h2 className='text-5xl font-semiboldx'>0</h2>
            <h3 className='text-3xl font-medium '>New Task</h3>
        </div>

        <div className='w-[30%] px-5 py-8 rounded-xl bg-green-400'>
            <h2 className='text-5xl font-semiboldx'>0</h2>
            <h3 className='text-3xl font-medium '>Completed Task</h3>
        </div>

        <div className='w-[30%] px-5 py-8 rounded-xl bg-orange-400'>
            <h2 className='text-5xl font-semiboldx'>0</h2>
            <h3 className='text-3xl font-medium '>Accepted Task</h3>
        </div>

        <div className='w-[30%] px-5 py-8 rounded-xl bg-red-500'>
            <h2 className='text-5xl font-semiboldx'>0</h2>
            <h3 className='text-3xl font-medium '>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers

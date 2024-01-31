import React from 'react'

type NotesSkeletonProps = {
  loop : number
}

const NotesSkeleton: React.FC<NotesSkeletonProps> = ({ loop }) => {
  const looping = new Array(loop).fill(null)

  return (
    <>
      {looping.map((_, index) => (
        <div key={index} className='card w-96 shadow-xl mx-auto min-h-full border border-base-300'>
          <div className='card-body'>
            <span className='card-title text-base-content w-10/12 h-5 mx-auto skeleton'></span>
            <div className='card w-11/12 mx-auto mt-3'>
              <span className='text-base-content w-1/2 h-3 skeleton'></span>
            </div>
            <span className='text-base-content w-11/12 h-3 mx-auto mt-5 skeleton'></span>
            <span className='text-base-content w-11/12 h-3 mx-auto skeleton'></span>
            <span className='text-base-content w-11/12 h-3 mx-auto skeleton'></span>
            <span className='text-base-content w-11/12 h-3 mx-auto skeleton'></span>
            <div className='card-actions justify-end mt-5'>
              <span className='w-16 h-12 skeleton'></span>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default NotesSkeleton
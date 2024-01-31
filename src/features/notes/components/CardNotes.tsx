import React from 'react'
import { ShowFormattedDate } from '../../../utils/formateDate'
import { Link } from 'react-router-dom'
import parser from 'html-react-parser'

type CardNotesProps = {
  id: string
  title: string
  createdAt: string
  body: string
}

const CardNotes: React.FC<CardNotesProps> = ({ id, title, createdAt, body }) => {
  return (
    <>
      <div className='card w-96 bg-secondary shadow-xl mx-auto min-h-full'>
        <div className='card-body'>
          <h2 className='card-title text-secondary-content'>{parser(title)}</h2>
          <p className='text-secondary-content'>{ShowFormattedDate(createdAt)}</p>
          <p className='text-secondary-content line-clamp-6'>{parser(body)}</p>
          <div className='card-actions justify-end'>
            <Link to={`/notes/detail/${id}`} className='btn btn-primary'>
              Detail
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardNotes

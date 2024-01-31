import React from 'react'
import { IoMdInformationCircleOutline } from 'react-icons/io'

type InfoNotesProps = {
  info: string
}

const InfoNotes: React.FC<InfoNotesProps> = ({ info }) => {
  return (
    <>
      <div className='alert flex items-center justify-center absolute'>
        <IoMdInformationCircleOutline size={30} />
        <span>{info}</span>
      </div>
    </>
  )
}

export default InfoNotes
import React from 'react'
import { IoArrowBackOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

const BackButton = () => {

    const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} className='bg-[#eee3ff] p-2 text-xl font-bold rounded-full text-[#1e1e2e] '> 
        <IoArrowBackOutline />
    </button>
  )
}

export default BackButton
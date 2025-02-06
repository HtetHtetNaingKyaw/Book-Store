import React from 'react'
import { useParams } from 'react-router-dom'

const BookDetail = () => {
    const {id} = useParams()
  return (
    <div className='text-5xl'>
      Book Details {id}
    </div>
  )
}

export default BookDetail

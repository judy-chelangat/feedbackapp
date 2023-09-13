import React from 'react'
import { useState } from 'react'

function FeedbackItem() {
    const [rating,setRating]=useState(3)
    const [text,setText]=useState('this is a text')
  return (
    <div className='card'>
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
    </div>
  )
}

export default FeedbackItem

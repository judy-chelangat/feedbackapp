import React from 'react'
import Card from './shared/Card'//in order to wrap the form in a card
import { useState } from 'react'
import Button from './shared/Button'//custom button for all components
import RatingSelect from './RatingSelect'

function FeedbackForm() {
    const [text,setText]=useState('')
    const [rating,setRating]=useState(10) 
    const [btnDisabled, setBtnDisabled] = useState(true) //button is disabled by default unless you type 10 characters
    const [message, setMessage] = useState('')
  
  //to get whatever is being typed in
    const handleTextChange =(e)=>{
        if (text === ''){
           setBtnDisabled (true)
           setMessage(null)
        }
        else if(text != '' && text.trim().length<=10){
            setBtnDisabled(true)
            setMessage('text must be at least 10 characters')
        }
        else{
            setMessage(null)
            setBtnDisabled(false)
        }
     setText(e.target.value)
    }
  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect/>
        <div className="input-group">
            <input onChange={handleTextChange} type="text" placeholder='write a review' value={text}/>
            <Button type="submit" isDisabled={btnDisabled}>Send</Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
      
    </Card>
  )
}

export default FeedbackForm

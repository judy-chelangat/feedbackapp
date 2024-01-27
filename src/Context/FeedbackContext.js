import React from 'react'
import { createContext,useState } from 'react'

const FeedbackContext =createContext()

export const FeedbackProvider= ({children})=>{
    const [feedback,setFeedback]=useState()
return< FeedbackContext.Provider value ={{
    
}}>
{children}
</FeedbackContext.Provider>
}

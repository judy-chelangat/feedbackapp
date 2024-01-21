import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import { useState } from "react"
import FeedbackData from "./data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import {v4 as uuidv4} from 'uuid'
function App(){
    const [feedback,setFeedback]=useState(FeedbackData) //app level state
   // function to deleted a specific data
    const deleteFeedback =(id)=>{
        setFeedback(feedback.filter((item) => item.id!=id))
    }
    //high order array method 

    //function to add a new feedback

    const addFeedback = (newFeedback)=>{
       newFeedback.id = uuidv4()
        //console.log(newFeedback)
        setFeedback([newFeedback,...feedback])
    }
     return(
        <>
        <Header/>
        <div className="container">
            <FeedbackForm handleAdd={addFeedback}/>
            <FeedbackStats feedback={feedback}/>
         <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
        </div>
        </>
    )
}

export default App
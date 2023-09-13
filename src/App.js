import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import { useState } from "react"
import FeedbackData from "./data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats"

function App(){
    const [feedback,setFeedback]=useState(FeedbackData)

    const deleteFeedback =(id)=>{
        setFeedback(feedback.filter((item) => item.id!=id))
    }
     return(
        <>
        <Header/>
        <div className="container">
            <FeedbackStats feedback={feedback}/>
         <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
        </div>
        </>
    )
}

export default App
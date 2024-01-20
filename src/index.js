import React from "react";
import ReactDOM  from "react-dom";// allows us to interact with the dom in the browser
import App from './App'
import "./index.css"

ReactDOM.render(
//adds aditional checks and warnings
<React.StrictMode> 
<App/>
</React.StrictMode>
,document.getElementById('root'))
//jsx allows us to write html in our component
//javascript xml
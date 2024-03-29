import React from 'react'
import PropTypes from 'prop-types'
// you have to import proptypes 

function Header({bgColor,textColor,text}) {
    const headerStyles ={
        backgroundColor:bgColor,
        color:textColor,
    }
  return (
    <header style={headerStyles}>
      <div className='container'>
       <h2>{text}</h2>
      </div>
    </header>
  )
}
// default props 
Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95',
  }
  //typechecking for the props 
  Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
  }
  
export default Header

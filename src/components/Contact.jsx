import React from 'react'
import '../fonts.css'

const container= {
    padding: '16px', 
    color: '#DDADF7',
    marginBottom: '25vh',
}

const header = {
    fontFamily: 'Urbanist',

}

const formContainer = {


}

const emailInput = {
    background: 'none',
    border: 'none',
    color: 'white',
    fontFamily: 'Urbanist',
    fontSize: '18px',
    outline: 'none'
}

const separator = {
    marginTop: '4px',
    height: '1px',
    background: 'linear-gradient(225deg, rgba(255, 92, 0, 0.44) 26.04%, rgba(143, 0, 255, 0.32) 100%), #FFFFFF',
}

const textInput = {
    marginTop: '16px',
    background: 'none',
    border: 'none',
    height: '200px',
    color: 'white',
    fontFamily: 'Urbanist',
    fontSize: '18px',
    resize: 'none',
    outline: 'none'
}

const submitButton = {
    background: 'linear-gradient(225deg, rgba(255, 92, 0, 0.44) 26.04%, rgba(143, 0, 255, 0.32) 100%), #FFFFFF',
    border: 'none',
    borderRadius: '30px',
    color: 'white',
    width: '100px',
    height: '50px',
    fontFamily: 'Urbanist',
    fontWeight: 'bold',
    fontSize: '18px',

}

const Contact = () => {
  return (
    <div id="contact" style={container}>
        <h1 style={header}>contact</h1>
        <form style={formContainer}>
            <input style={emailInput}  type="email" name="name" placeholder='email...' />
            <div style={separator}></div>
            <textarea style={textInput} type="text" name="name" placeholder='leave a note...'/>
            <input style={submitButton} type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default Contact
import React from 'react'
import '../fonts.css'
import { ReactComponent as GitHub } from '../github.svg'
import { ReactComponent as LinkedIn } from '../linkedin.svg'



const container= {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100vh',
    padding: '16px', 
    color: '#DDADF7',
    marginBottom: '25vh',
}

const header = {
    fontFamily: 'Urbanist',

}

const contactIcons = {

}

const contactIcon = {
    margin: '8px',
    width: '32px'

}

const formContainer = {


}

const emailInput = {
    marginTop: '12px',
    background: 'none',
    border: 'none',
    color: 'white',
    fontFamily: 'Urbanist',
    fontSize: '18px',
    outline: 'none'
}

const separator = {
    marginTop: '0px',
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
    fontWeight: '300',
    resize: 'none',
    outline: 'none',
    width: '99%',
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
        <div style={contactIcons}>
            <a href='https://github.com/joshkotrous' target='_blank'><GitHub style={contactIcon} /></a>
            <a href='https://www.linkedin.com/in/joshkotrous/'  target='_blank'><LinkedIn style={contactIcon}/></a>
        </div>
        <form style={formContainer}>
            <input style={emailInput}  type="text" name="name" placeholder='name' />
            <div style={separator}></div>
            <input style={emailInput}  type="email" name="email" placeholder='email' />
            <div style={separator}></div>
            <textarea style={textInput} type="text" name="note" placeholder='leave a note'/>
            <input style={submitButton} type="submit" value="submit" />
        </form>
    </div>
  )
}

export default Contact
import {React} from 'react'
import '../assets/fonts.css'


const aboutHeader = {
    fontFamily: 'Urbanist',
    marginTop: 0
}

const aboutContainer = {
    // height: '100vh',
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '30px 10%',
    color: '#DDADF7',
}

const aboutText = {
    fontWeight: '300',
    color: 'white',
    fontFamily: 'Urbanist'

}

const About = () => {
  return (
    <div id="about" style={aboutContainer}>
        <h1  style={aboutHeader}>about me</h1>
        <p style={aboutText}>
            <span style={{fontWeight: '500'}}>My name is Josh Kotrous.</span>
            <br />
            <br />
            Currently working for Neostella as the Development Manager, I am a software developer focused on constantly learning new things and expanding my abilities. I am particularly experienced in implementing automations to complete complex business processes and leading high-performing software delivery teams. 
            <br />
            <br />
            Most recently I've been focused on honing my full-stack development skills using React and Python to build maintainable, scalable, and responsive web applications.
            <br />
            <br />
            If you'd like to work with me or just chat, fill out the contact form at the bottom of the page. 
            <br />
            <br />
            Thanks for visiting!
        </p>
    </div>
  )
}

export default About
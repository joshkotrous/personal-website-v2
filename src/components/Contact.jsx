import {React, useState} from 'react'
import axios from 'axios'
import '../assets/fonts.css'
import { ReactComponent as GitHub } from '../assets/github.svg'
import { ReactComponent as LinkedIn } from '../assets/linkedin.svg'



const container = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100vh',
    padding: '16px',
    color: '#DDADF7',
    backgroundColor: "#4D4D4D"
}

const header = {
    fontFamily: 'Urbanist',

}

const contactIcons = {

}

const contactIcon = {
    marginRight: '16px',
    marginLeft: '0',
    width: '32px',

}

const formContainer = {


}

const emailInput = {
    width: '100%',
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
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [note, setNote] = useState('')

    const sendEmail = ((subject, body) => {
        const endpoint = 'https://rosuwl2qmr3lddcwrxigiwxpv40zsrul.lambda-url.us-east-1.on.aws/'

        axios.post(endpoint, {
            subject: subject,
            body: body
        }
        )
            .then(function (response) {
   
            })
            .catch(function (error) {
                console.log(error);
            });
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        sendEmail("Inquiry from " + name, "Email: " + email + "\n\n" + note)
        setName('')
        setEmail('')
        setNote('')
    }

    return (
        <div id="contact" style={container}>
            <h2 style={header}>contact</h2>
            <div style={contactIcons}>
                <a href='https://github.com/joshkotrous' rel="noreferrer" target='_blank'><GitHub style={contactIcon} /></a>
                <a href='https://www.linkedin.com/in/joshkotrous/' rel="noreferrer" target='_blank'><LinkedIn style={contactIcon} /></a>
            </div>
            <form style={formContainer} onSubmit={handleSubmit}>
                <input style={emailInput} type="text" name="name" placeholder='name' onChange={event => setName(event.target.value)} value={name}/>
                <div style={separator}></div>
                <input style={emailInput} type="email" name="email" placeholder='email' onChange={event => setEmail(event.target.value)} value={email}/>
                <div style={separator}></div>
                <textarea style={textInput} type="text" name="note" placeholder='leave a note' onChange={event => setNote(event.target.value)} value={note}/>
                <button style={submitButton} type="submit" value="submit">submit</button>
            </form>
        </div>
    )
}

export default Contact
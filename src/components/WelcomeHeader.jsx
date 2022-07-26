import React, {useEffect, useState} from 'react'
import '../fonts.css'

const container = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100vh',
}

const welcomeHeaderContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '400px',
    background: 'linear-gradient(225deg, rgba(255, 92, 0, 0.44) 26.04%, rgba(143, 0, 255, 0.32) 100%), #FFFFFF'
}

const headerTextContainer = {
    width: '75vw',
    color: 'white',
    fontFamily: 'Urbanist',
}

const cyclingText = {
    fontWeight: 'bold'
}




const WelcomeHeader = () => {
    const [index, setIndex] = useState(0)

    const [headers]  = useState(["software", "automation", "react", "uipath", "python", "aws", "solution architecture"])


    useEffect(()=> {
        const interval = setInterval(() => {
            setIndex(index + 1)
            if (index === headers.length - 1) {
                setIndex(0);
            }
          }, 2000)
      
        return (() => clearInterval(interval)) 

    })


  return (
      <div style={container}>
          <div id="home" style={welcomeHeaderContainer}>
              <div style={{ background: 'white', width: '1px', height: '50%', margin: '16px' }}></div>
              <div style={{ display: 'flex', flexDirection: 'column', }}>
                  <div style={{ background: 'white', width: '100%', height: '1px', marginLeft: 'auto', marginRight: 'auto', marginBottom: '32px' }}></div>
                  <div style={headerTextContainer}>
                      <h1 style={{ fontWeight: '300' }}>a <br></br><span style={cyclingText}>{headers[index]}</span><br></br> enthusiast</h1>
                  </div>
                  <div style={{ background: 'white', width: '100%', height: '1px', marginLeft: 'auto', marginRight: 'auto', marginTop: '32px' }}></div>
              </div>
              <div style={{ background: 'white', width: '1px', height: '50%', margin: '16px' }}></div>
          </div>
      </div>

  )
}

export default WelcomeHeader
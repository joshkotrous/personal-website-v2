import React from 'react'
import '../fonts.css'


const container = {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    justifyContent: 'center',
    padding: '16px',
}

const skillsHeader = {
    fontFamily: 'Urbanist',
    color: '#DDADF7',

}

const skillItemsContainer = {
    padding: '4px'

}

const skillItemContainer = {
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'center',
    marginBottom: '25px',

}


const skillItemHeader = {
    textAlign: 'right',
    color: 'white',
    fontWeight: '300',
    // width: '75px'

}

const skillBarContainer = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    marginLeft: '24px',
    width: '300px'
}

const skillBarBackround = {
    position: 'absolute',
    width: '250px',
    height: '5px',
    borderRadius: '30px',
    background: 'white',

}

const skillBarForeground100 = {
    position: 'absolute',
    width: '250px',
    height: '5px',
    background: 'linear-gradient(225deg, rgba(255, 92, 0, 0.44) 26.04%, rgba(143, 0, 255, 0.32) 100%), #FFFFFF',
    borderRadius: '30px'
}

const skillBarForeground75 = {
    position: 'absolute',
    width: '250px',
    height: '5px',
    background: 'linear-gradient(225deg, rgba(255, 92, 0, 0.44) 26.04%, rgba(143, 0, 255, 0.32) 100%), #FFFFFF',
    borderRadius: '30px'
}

const skillBarForeground50 = {
    position: 'absolute',
    width: '150px',
    height: '5px',
    background: 'linear-gradient(225deg, rgba(255, 92, 0, 0.44) 26.04%, rgba(143, 0, 255, 0.32) 100%), #FFFFFF',
    borderRadius: '30px'
}

const skillBarForeground25 = {
    position: 'absolute',
    width: '75px',
    height: '5px',
    background: 'linear-gradient(225deg, rgba(255, 92, 0, 0.44) 26.04%, rgba(143, 0, 255, 0.32) 100%), #FFFFFF',
    borderRadius: '30px'
}

const Skills = () => {
    return (
        <div id="skills" style={container}>
            <h1 style={skillsHeader}>skills</h1>
            <div style={skillItemsContainer}>
                <div style={skillItemContainer}>
                    <div style={skillItemHeader}>UiPath</div>
                    <div style={skillBarContainer}>
                        <div style={skillBarBackround}>
                        </div>
                        <div style={skillBarForeground100}>
                        </div>
                    </div>
                </div>
                <div style={skillItemContainer}>
                    <div style={skillItemHeader}>Workato</div>
                    <div style={skillBarContainer}>
                        <div style={skillBarBackround}>
                        </div>
                        <div style={skillBarForeground100}>
                        </div>
                    </div>
                </div>
                <div style={skillItemContainer}>
                    <div style={skillItemHeader}>React JS</div>
                    <div style={skillBarContainer}>
                        <div style={skillBarBackround}>
                        </div>
                        <div style={skillBarForeground75}>
                        </div>
                    </div>
                </div>
                <div style={skillItemContainer}>
                    <div style={skillItemHeader}>Python</div>
                    <div style={skillBarContainer}>
                        <div style={skillBarBackround}>
                        </div>
                        <div style={skillBarForeground50}>
                        </div>
                    </div>
                </div>
                <div style={skillItemContainer}>
                    <div style={skillItemHeader}>AWS</div>
                    <div style={skillBarContainer}>
                        <div style={skillBarBackround}>
                        </div>
                        <div style={skillBarForeground25}>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Skills
import React from 'react'
import '../fonts.css'


const container = {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100vh',
    padding: '16px'
}

const skillsHeader = {
    fontFamily: 'Urbanist',
    color: '#DDADF7',

}

const skillItemsContainer = {
    // padding: '4px'
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'

}

const skillHeaders = {
    height: '100%'
}

const skillHeader = {
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'center',
    height: '50px',
    marginRight: '24px',
    fontFamily: 'Urbanist',
    color: 'white',
    fontSize: '18px'

}

const skillBars = {
    height: '100%'
}

const skillItemContainer = {
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'center',
    marginBottom: '25px',

}


const skillItemHeader = {
    color: 'white',
    fontWeight: '300',
    // width: '75px'

}

const skillBarContainer = {
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left'
}

const skillBarBackround = {
    width: '275px',
    height: '5px',
    borderRadius: '30px',
    background: 'white',

}

const skillBarForeground100 = {
    position: 'absolute',
    width: '275px',
    height: '5px',
    background: 'linear-gradient(225deg, rgba(255, 92, 0, 0.44) 26.04%, rgba(143, 0, 255, 0.32) 100%), #FFFFFF',
    borderRadius: '30px'
}

const skillBarForeground75 = {
    position: 'absolute',
    width: '205px',
    height: '5px',
    background: 'linear-gradient(225deg, rgba(255, 92, 0, 0.44) 26.04%, rgba(143, 0, 255, 0.32) 100%), #FFFFFF',
    borderRadius: '30px'
}

const skillBarForeground50 = {
    position: 'absolute',
    width: '137px',
    height: '5px',
    background: 'linear-gradient(225deg, rgba(255, 92, 0, 0.44) 26.04%, rgba(143, 0, 255, 0.32) 100%), #FFFFFF',
    borderRadius: '30px'
}

const skillBarForeground25 = {
    position: 'absolute',
    width: '68px',
    height: '5px',
    background: 'linear-gradient(225deg, rgba(255, 92, 0, 0.44) 26.04%, rgba(143, 0, 255, 0.32) 100%), #FFFFFF',
    borderRadius: '30px'
}

const Skills = () => {
    return (
        <div id="skills" style={container}>
            <h1 style={skillsHeader}>skills</h1>
            {/* <div style={skillItemsContainer}>
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
            </div> */}

            <div style={skillItemsContainer}>
                <div style={skillHeaders}>
                    <div style={skillHeader}>UiPath</div>
                    <div style={skillHeader}>Workato</div>
                    <div style={skillHeader}>React</div>
                    <div style={skillHeader}>Python</div>
                    <div style={skillHeader}>AWS</div>
                </div>
                <div style={skillBars}>
                    <div style={skillBarContainer}>
                        <div style={skillBarBackround}></div>
                        <div style={skillBarForeground100}>
                        </div>
                    </div> 
                    <div style={skillBarContainer}>
                        <div style={skillBarBackround}></div>
                        <div style={skillBarForeground100}>
                        </div>
                    </div> 
                    <div style={skillBarContainer}>
                        <div style={skillBarBackround}></div>
                        <div style={skillBarForeground75}>
                        </div>
                    </div> 
                    <div style={skillBarContainer}>
                        <div style={skillBarBackround}></div>
                        <div style={skillBarForeground50}>
                        </div>
                    </div> 
                    <div style={skillBarContainer}>
                        <div style={skillBarBackround}></div>
                        <div style={skillBarForeground25}>
                        </div>
                    </div> 
                </div>
            </div>
        </div>

    )
}

export default Skills
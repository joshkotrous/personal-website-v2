import React from 'react'
import '../fonts.css'



const projectsContainer = {
    padding: '16px',
    paddingTop: '32px',
    color: '#DDADF7',
    marginTop: '32px',
    marginBottom: '25vh',
}

const projectsHeader = {
    fontFamily: 'Urbanist',

}

const projectItemsContainer = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

}

const projectItem ={
    height: '150px',
    width: '150px',
    margin: '10px',
    background: 'linear-gradient(225deg, rgba(255, 92, 0, 0.44) 26.04%, rgba(143, 0, 255, 0.32) 100%), #FFFFFF'

}

const Projects = () => {
  return (
    <div id="projects" style={projectsContainer}>
        <h1 style={projectsHeader}>projects</h1>
        <div style={projectItemsContainer}>
            <div style={projectItem}>
            </div>
            <div style={projectItem}>
            </div>
            <div style={projectItem}>
            </div>
        </div>
        <div style={projectItemsContainer}>
            <div style={projectItem}>
            </div>
            <div style={projectItem}>
            </div>
            <div style={projectItem}>
            </div>
        </div>
    </div>
  )
}

export default Projects
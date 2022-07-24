import {React, useState} from 'react'
import '../fonts.css'


const aboutHeader = {
    fontFamily: 'Urbanist',

}

const aboutContainer = {
    padding: '16px',
    paddingTop: '32px',
    color: '#DDADF7',
}

const aboutItemContainer = {
    marginBottom: '25vh'
}

const aboutItemHeader = {
    color: 'white',
    fontWeight: '300',
    fontSize: '36px',
    fontFamily: 'Urbanist',


}

const aboutItemSeparator = {
    height: '1px',
    background: 'white'
}

const aboutText = {
    fontWeight: '300',
    color: 'white',
    fontFamily: 'Urbanist'

}

const About = () => {
    const [aboutItems] = useState([
        {text: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit.", year: "2022"},
        {text: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit.", year: "2022"},
        {text: "Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit.", year: "2022"}

    ])

    const renderAboutList = aboutItems.map((item, index) => 
        <div key={index} style={aboutItemContainer}>
            <h2 style={aboutItemHeader}>{item.year}</h2>
            <div style={aboutItemSeparator}></div>
        <p style={aboutText}>{item.text}</p>
        </div>
    );


  return (
    <div id="about" style={aboutContainer}>
        <h1  style={aboutHeader}>about me</h1>
        {renderAboutList}
    </div>
  )
}

export default About
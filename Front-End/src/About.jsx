import React from 'react'
import './About.css'

function About({title,para,url,click}) {

    
  return (
    <div className='bodyAbout'>

    <section className="about-section">
        <div className="about-container" style={{height:"800px"}}>
            <div className="about-image">
                <img src={url} alt="Farmers in the field"/>
            </div>
            <div className="about-content">
                <h2>{title}</h2>
                <p>{para}</p>
                <button className="learn-more" onClick={click}>Learn More</button>
            </div>
        </div>
    </section>

</div>
  )
}

export default About
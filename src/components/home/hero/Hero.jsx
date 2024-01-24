import React from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO CODE N CLOUD' title='Unlock your Potential' />
            <p>"Empowering minds, transforming skills,Here training unfolds,and innovation thrives."</p>
            <div className='button'>
              <button className='primary-btn' style={{background:"#FF004F"}}>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button style={{background:"#3457D5"}}>
                <span style={{color:"white"}}>VIEW COURSE</span> <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero

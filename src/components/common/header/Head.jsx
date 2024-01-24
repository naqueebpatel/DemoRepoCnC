import React from "react"
import img from "./cnc.png"
import { red } from "@mui/material/colors"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
        <div className='logo'>
            <img src={img} alt='Code N Cloud Logo' className='logo-img' />
            <div className='logo-text'>
              <h1><span style={{color:"#C60C30"}}>CODE</span><span style={{color:"black"}}>  N</span><span style={{color:"#073980"}}>  CLOUD</span> </h1>
              <span>EDUCATION & TRAINING</span>
            </div>
          </div>

          <div className='social'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
          </div>
        </div>
      </section>
    </>
  )
}

export default Head

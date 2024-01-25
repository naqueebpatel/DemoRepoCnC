import React from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.css";
import AboutCard from "../../about/AboutCard";
import HAbout from "../HAbout";
import Testimonal from "../testimonal/Testimonal";

const Hero = ( { toggleModal } ) =>
{
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO CODE N CLOUD' title='Unlock your Potential' />
            <p>"Empowering minds, transforming skills,Here training unfolds,and innovation thrives."</p>
            <div className='button'>
              <button className='primary-btn hero-btn' style={ { background: "#FF004F", cursor: "pointer" } }>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button className="hero-btn">
                <span style={ { color: "white" } }>VIEW COURSE</span> <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      { !toggleModal && <div className='margin'></div> }
    </>
  );
};

export default Hero;

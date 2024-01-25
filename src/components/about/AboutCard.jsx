import React from "react";
import Heading from "../common/heading/Heading";
import "./about.css";
import { homeAbout } from "../../dummydata";
import Awrapper from "./Awrapper";
import img from "./bg5.jpg";

const AboutCard = () =>
{
  return (
    <>
      <section className='aboutHome' data-aos="zoom-out">
        <div className='container flexSB'>
          <div className='left row'>
            <img src={ img } alt='' />
          </div>
          <div className='right row'>
            <Heading subtitle='LEARN ANYTHING' title='Benefits About Online Learning Expertise' />
            <div className='items'>
              { homeAbout.map( ( val ) =>
              {
                return (
                  <div className='item flexSB'>
                    <div className='img'>
                      <img src={ val.cover } alt='' />
                    </div>
                    <div className='text'>
                      <h2>{ val.title }</h2>
                      <p>{ val.desc }</p>
                    </div>
                  </div>
                );
              } ) }
            </div>
          </div>
        </div>
      </section>
      <Awrapper />
    </>
  );
};

export default AboutCard;

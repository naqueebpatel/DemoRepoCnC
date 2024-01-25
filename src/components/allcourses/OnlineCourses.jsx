import React, { useEffect } from "react";
import "./courses.css";
import { online } from "../../dummydata";
import Heading from "../common/heading/Heading";
import AOS from 'aos';

const OnlineCourses = () =>
{
  useEffect( () =>
  {
    AOS.init( { duration: 1400 } );
  }, [] );
  return (
    <>
      <section className='online' data-aos="zoom-out">
        <div className='container'>
          <Heading subtitle='COURSES' title='Browse Our Online Courses' />
          <div className='content grid3'>
            { online.map( ( val ) => (
              <div className='box'>
                <div className='img'>
                  <img src={ val.cover } />
                  <img src={ val.hoverCover } alt='' className='show' />
                </div>
                <h1>{ val.courseName }</h1>
                <span>{ val.course }</span>
              </div>
            ) ) }
          </div>
        </div>
      </section>
    </>
  );
};

export default OnlineCourses;

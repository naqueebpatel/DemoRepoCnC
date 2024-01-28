import React, { useState } from "react";
import "./courses.css";
import { coursesCard } from "../../dummydata";
import EnrollNow from './../EnrollNow/EnrollNow';
import CourseDetailModal from "../modal/CourseDetailModal";
import { data } from "../data/data";
const CoursesCard = () =>
{
  const [ modal, setModal ] = useState( false );
  const [ coursedetail, setCourseDetail ] = useState( [] );
  const handleModal = () =>
  {
    setModal( !modal );
  };
  const [ CourseModal, setCourseModal ] = useState( false );
  function handleCourseModal ( id )
  {
    setCourseModal( !CourseModal );
    const course_detail = data.filter( ( course ) => course.id === id );
    setCourseDetail( course_detail );
  }
  return (
    <>
      <section className='coursesCard'>
        <div className='container grid2'>
          { coursesCard.map( ( val ) => (
            <div className='items'>
              <div className='content flex'>
                <div className='left'>
                  <div className='img'>
                    <img src={ val.cover } alt='' />
                  </div>
                </div>
                <div className='text'>
                  <h1>{ val.coursesName }</h1>
                  <div className='rate' >
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <label htmlFor='' style={ { color: "black" } }>(5.0)</label>
                  </div>
                  <div className='details'>
                    { val.courTeacher.map( ( details ) => (
                      <>
                        <div className='box'>
                          <div className='dimg'>
                            <img src={ details.dcover } alt='' />
                          </div>
                          <div className='para'>
                            <h4>{ details.name }</h4>
                          </div>
                        </div>
                        <span>{ details.totalTime }</span>
                      </>
                    ) ) }
                  </div>
                </div>
              </div>
              <div className='price'>
                <h3>
                  <span>{ val.priceAll } / { val.pricePer }</span>
                </h3>
              </div>
              <div className="button-container">
                <button className='outline-all-course-btn' onClick={ handleModal }><span>ENROLL NOW !</span></button>
                <button className="view-course" onClick={ () => handleCourseModal( val.id ) }>
                  <span>VIEW COURSE</span> <i className='fa fa-long-arrow-alt-right'></i>
                </button>
              </div>
            </div>
          ) ) }
        </div>
        { CourseModal && <CourseDetailModal handleCourseModal={ handleCourseModal } coursedetail={ coursedetail } /> }
        { modal && <EnrollNow handleModal={ handleModal } /> }
      </section>
    </>
  );
};

export default CoursesCard;

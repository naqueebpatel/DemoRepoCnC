import React from 'react';
import './style.css';
const CourseDetailModal = ( { handleCourseModal, coursedetail } ) =>
{
    console.log( coursedetail );
    return (
        <div>
            <section className='ftco-section' onClick={ handleCourseModal }>
                <div className="main">
                    <section className='course_detail_header'>
                        <img src={ coursedetail[ 0 ].poster } alt="" />
                    </section>
                </div>
            </section>
        </div>
    );
};

export default CourseDetailModal;
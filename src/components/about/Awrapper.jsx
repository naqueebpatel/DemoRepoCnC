import React, { useEffect } from "react";
import { awrapper } from "../../dummydata";
import AOS from "aos";

const Awrapper = () =>
{

  useEffect( () =>
  {
    AOS.init( { duration: 2000 } );
  }, [] );
  return (
    <>
      <section className='awrapper' data-aos="zoom-out">
        <div className='container grid'>
          { awrapper.map( ( val ) =>
          {
            return (
              <div className='box flex'>
                <div className='img'>
                  <img src={ val.cover } alt='' />
                </div>
                <div className='text'>
                  <h1>{ val.data }</h1>
                  <h3>{ val.title }</h3>
                </div>
              </div>
            );
          } ) }
        </div>
      </section>
    </>
  );
};

export default Awrapper;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import "./header.css";
import EnrollNow from "../../EnrollNow/EnrollNow";

const Header = ( { toggleModal, setToggleModal } ) =>
{
  const [ click, setClick ] = useState( false );

  function handleModal ()
  {
    setToggleModal( !toggleModal );
  }
  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={ click ? "mobile-nav" : "flexSB " } onClick={ () => setClick( false ) }>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/courses'>All Courses</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/team'>Team</Link>
            </li>
            <li>
              <Link to='/pricing'>Pricing</Link>
            </li>
            <li>
              <Link to='/journal'>Journal</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
          <div className='start' style={ { background: "#073980", cursor: "pointer" } } onClick={ handleModal }>
            <div className='button' >GET STARTED NOW</div>
          </div>
          <button className='toggle' onClick={ () => setClick( !click ) }>
            { click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i> }
          </button>
        </nav>
      </header>
      { toggleModal && <EnrollNow handleModal={ handleModal } /> }
    </>
  );
};

export default Header;

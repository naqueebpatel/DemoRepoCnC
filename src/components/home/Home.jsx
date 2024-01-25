import React from "react";
import AboutCard from "../about/AboutCard";
import Hblog from "./Hblog";
import HAbout from "./HAbout";
import Hero from "./hero/Hero";
import Hprice from "./Hprice";
import Testimonal from "./testimonal/Testimonal";
import EnrollNow from './../EnrollNow/EnrollNow';

const Home = ( { toggleModal, setToggleModal } ) =>
{
  return (
    <>
      <Hero toggleModal={ toggleModal } setToggleModal={ setToggleModal } />
      <AboutCard />
      <HAbout />
      <Testimonal />
    </>
  );
};

export default Home;

import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
function App() {
  const [ toggleModal, setToggleModal ] = useState( false );
  useEffect(()=>{
    AOS.init({duration:2000});
  },[])
  return (
    <>
      <Router>
        <Header  toggleModal={toggleModal} setToggleModal={setToggleModal}/>
        <Switch>
          <Route exact path='/'  render={(props)=>(<Home {...props} toggleModal={toggleModal} setToggleModal={setToggleModal}/>)}/>
          <Route exact path='/about' component={About} />
          <Route exact path='/courses' component={CourseHome} />
          <Route exact path='/team' component={Team} />
          <Route exact path='/pricing' component={Pricing} />
          <Route exact path='/journal' component={Blog} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App

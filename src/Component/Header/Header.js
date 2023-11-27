import React from 'react';
import { BrowserRouter as Router, Link,Route,Routes } from 'react-router-dom';
import './Header.css';
import Servicecontainer from '../Skill/Servicecontainer';
import Contact from '../Contact/Contact';
import About from '../About/About';
import Blog from '../Blog/Blog';
import LoginPage from '../Login/LoginPage';
import Topcontainer from '../Topcontainer/Topcontainer';
import Dashboard from '../Dashboard/Dashboard';
import Signup from '../Login/Signup';
import Paint from '../Service catergory/Paint/Paint';
import Tires from '../Service catergory/tires/Tires';
import Insurance from '../Service catergory/insurace/Insurance';
import Battery from '../Service catergory/battery/Battery';
import Detailing from '../Service catergory/detailing/Detailing';
import Periodic from '../Service catergory/periodic service/Periodic';
import Part from '../Service catergory/part/Part';
import Carwash from '../Service catergory/carwash/Carwash';
import Inspection from '../Service catergory/inspection/Inspection';
import Profile from '../Topcontent/Profile/Profile';

const Header = () => {
  return (
    <Router>

    <div className="header">
      <div className='header_left'>
        <h1><span>Re</span>parify<i className="fa-solid fa-truck-monster"></i></h1>
      </div>
      <div className='header_right'>
        <Link to='/'className='no-decoration'>
          <h4>HOME</h4>
        </Link>
        {/* <Link to='/service'>
          <h4>SERVICE</h4>
        </Link> */}
        <Link to='/contact' className='no-decoration'>
          <h4>CONTACT</h4>
        </Link>
        <Link to='/about' className='no-decoration'>
          <h4>ABOUT</h4>
        </Link>
        <Link to='/blog' className='no-decoration'>
          <h4>BLOG</h4>
        </Link>
        {/* <Link to='/login'>
          <h4>LOGIN</h4>
        </Link> */}
      </div>
    </div>
    <Routes>
      <Route exact path='/dashboard' element={<Dashboard/>}/>
      <Route exact path='/t' element={<Topcontainer/>}/>
      <Route exact path='/service' element={<Servicecontainer/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/blog' element={<Blog/>}/>
      <Route exact path='/' element={<LoginPage/>}/>
      <Route exact path='/sign' element={<Signup/>}/>
      <Route exact path='/paint' element={<Paint/>}/>
      <Route exact path='/tires' element={<Tires/>}/>
      <Route exact path='/insurance' element={<Insurance/>}/>
      <Route exact path='/batteries' element={<Battery/>}/>
      <Route exact path='/detailing' element={<Detailing/>}/>
      <Route exact path='/periodic' element={<Periodic/>}/>
      <Route exact path='/parts' element={<Part/>}/>
      <Route exact path='/wash' element={<Carwash/>}/>
      <Route exact path='/inspection' element={<Inspection/>}/>
      <Route exact path='/profile' element={<Profile/>}/>
    
      
      

      

    </Routes>
    </Router>
  );
}

export default Header;

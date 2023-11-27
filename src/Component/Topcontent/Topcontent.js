import React from 'react'
import "./Topcontent.css";
import Jeep from './scroll.png';
import { Link } from 'react-router-dom';
// import account from './account'
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
const Topcontent = () => {
  return (

    <div className='topcontent'>
      <div className='topcontent_welcome'>
      
        <h1>Welcome to our premier <span>Reparify</span>  website, where automotive excellence meets unrivaled customercare .</h1>
        <div className='sign_container'>
      <button className='explore_btn'>  EXPLORE NOW </button>
      <div className='profile'>
      <Link to='/profile' className='no-decoration1'>

      <i class="fa-solid fa-user fa-xl"></i>
      </Link>
      </div>
      
    </div>
    <div>

          {/* <img  src={Jeep} alt='' /> */}
    </div>
      </div>
        <div className='topcontent_container'>
            <h1>Experience The Best Car Service In TamilNadu</h1>
            <p>Get instant quotes for your car service</p>
            <div className='option'>
            <select id="cars" className='car'>
            <option value="Maruti Suzuki">Maruti Suzuki</option>
            <option value="Hyndai">Hyndai</option>
            <option value="honda">Honda</option>
            <option value="audi">Audi</option>
            <option value="tata">Tata</option>
            <option value="Ford">Ford</option>
            <option value="Mahindra">Mahindra</option>
            <option value="Skoda">Skoda</option>
          </select><br />
          <input className='mobile' type='number' placeholder='Mobile Number'></input><br />
          <button className='check-btn'>Checked Price</button>
        </div>
      </div>
    </div>
  )
}

export default Topcontent
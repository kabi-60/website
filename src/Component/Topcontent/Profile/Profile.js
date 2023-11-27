import React from 'react'
import './Profile.css';
import profile from './account.png'
import set from './verified.png';
import set1 from './setting-lines.png';
// import profile from './account.png'
import verify from './verified.png'
import setting from './setting-lines.png'
import { Link } from 'react-router-dom'
const Profile = () => {
  return (
    <div className='Profile_container'>
      <div className='navbar_profile'>

        <ul>
          {/* <Link to='/profile_home' className='no-decoration1'> */}
  <li><a><i class="fa-solid fa-house"></i>Home</a></li>
           {/* </Link> */}
  <li><a ><i class="fa-solid fa-lock"></i>Security</a></li>
  <li><a ><i class="fa-solid fa-file-shield"></i> Data privacy</a></li>
  <li><a ><i class="fa-solid fa-address-card"></i> About</a></li>
</ul>
      </div>

      <div className='Welcome_profile'>
        <p className='profile_icon'>
          <img src={profile}/>
        </p>
        <h1 className='H1'>Welcome Admin</h1>
        <p className='profile_para'>Manage your info, privacy, and security to make Google work better for you. Learn more</p>
        
      </div>
      <div className='boxes'>
        <div className='box_a'>
          <h3>Privacy & Personalization</h3>
          <p>see the data in you repairfy account adn chooseehat activity is saved to personalize your repairfy</p>
          <a href=''>Manage your data </a>
          <img src={set} className='set1'/>
        </div>
        <div className='box_a'>
          <h3>You have Security tips</h3>
          <p>Security tips found in the security checkup</p>
          <a href=''>Review Security tips</a>
          <img src={set1} className='set2'/>
        </div>

      </div>
    </div>
  )
}

export default Profile
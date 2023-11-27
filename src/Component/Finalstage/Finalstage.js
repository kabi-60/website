import React from 'react';
import "./Finalstage.css";

const Finalstage = () => {
  return (
    <div className='final_container'>
      <div className='final_box'>
        <div className='final_box1'>
          <h1>Reparify <i class="fa-solid fa-truck-pickup"></i></h1>
          <p>Branches</p>
        </div>
        <div className='final_box1'>
          <h1>Resources <i class="fa-regular fa-address-card"></i></h1>
          <p>About</p>
          <p>Service</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
        <div className='final_box1'>
          <h1>Community <i class="fa-brands fa-nfc-symbol"></i></h1>
          <p>Twitter</p>
          <p>Facebook</p>
          <p>LinkdIn</p>
          <p>Instagram</p>
          {/* <p>Youtube</p> */}
        </div>
        <div className='final_box1'>
          <h1>Company <i class="fa-solid fa-house-laptop"></i></h1>
          <p>About us</p>
          <p>Careers</p>
          <p>Legal</p>
        </div>
      </div>
      <div className='final_logo'>
        <h1>Follow us <i class="fa-solid fa-circle-check"></i></h1>
        <a href=''><i class="fa-brands fa-facebook"></i></a>
        <a href=''><i class="fa-brands fa-twitter"></i></a>
        <a href=''><i class="fa-brands fa-instagram"></i></a>
        <a href=''><i class="fa-brands fa-wh  atsapp"></i></a>
        <a href=''><i class="fa-brands fa-youtube"></i></a>
      </div>
    </div>
  )
}

export default Finalstage
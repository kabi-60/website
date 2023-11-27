import React from 'react';
import "./Contact.css";
// import { Element } from 'react-scroll';
import phone from './phone.png';
import office from './office-building.png';
import mail from './email.png';


const Contact = () => {
  return (
    // <Element name='Contact'>
        <div className='contact_container'>
            <div className='contact_container_box'>
                <div className='contact_box'>
                    <h1>HELP LINE NUMBER</h1>
                    <h1><span>_________________</span></h1>
                    <p><i class="fa-solid fa-phone"></i> <span>0123456789</span> </p><br/><br/><br/>
                    <p><i class="fa-brands fa-whatsapp"></i> <span>0123456789</span></p>
                    <div className='phone_logo'><br/><br/><br/><br/><br/>
                    <img src={phone} alt='' />
                    </div>

                    </div>
                <div className='contact_box'>
                    <h1>OFFICE ADDRESS</h1>
                    <h1><span>_________________</span></h1>
                    <p><span>Reparify Motor Service</span> </p><br/><br/>
                    <p><i class="fa-solid fa-location-dot"></i><span> Sri krishna Engineering college,</span></p><br/><br/><br/>
                     <p><span>Kuniyamuthur,Coimbatore,</span></p><br/><br/>
                    <p><span> 641008.</span></p>
                    <img  src={office} alt='' /> 
                </div>
                {/* <div className='contact_box'>
                    <h1>EMAIL</h1>
                    <h1><span>______</span></h1>
                    <p><i class="fa-solid fa-envelope"></i> <span>  abcd@gmail.com</span></p><br/><br/>
                    <p><i class="fa-brands fa-microsoft"></i> <span> abcd@outlook.com</span></p><br/><br/>
                    <p><i class="fa-solid fa-envelope"></i>  <span> abcd@skcet.com</span></p>
                    <img  src={mail} alt='' /> 
                   
                </div> */}
            </div>
        <div>
            
        </div>
        </div>

    //  </Element>
  )
}

export default Contact
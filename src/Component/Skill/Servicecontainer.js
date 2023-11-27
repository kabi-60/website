import "./Servicecontainer.css";
// import { Element } from "react-scroll";
import box1 from "./periodic.png";
import box2 from "./carwash.png";
import box3 from "./brake.png"
// import box4 from "./door.png";
import box5 from "./clipboard.png";
import box6 from "./searching.png";
import box7 from "./battery.png";
import box8 from "./car.png";
import box9 from "./tires.png";
import box0 from "./paint.png"
import { Link } from 'react-router-dom'

export const Servicecontainer = () => {
    return (
        // <Element name='service'>
            <div className='servicecontainer'>
                <h1>Car Service in <span>Tamil</span>Nadu</h1>
                <p>Get discounted and priodic <span>car service,car repair,car wheel care service,cashless insurance claim</span> and much more in coimbatore.</p>
                <div className='service_avaiable'>
                    <div className='service_box'>
                       <img src={box1} alt=""/>
                       <Link to='/inspection' className='no-decoration'>
                       <p>Car Inspections</p>
                       </Link>
                       
                    </div>
                    <div className='service_box'>
                    <img src={box2} alt=""/>
                    <Link to='/wash' className='no-decoration'>
                       <p>Car Wash</p>
                       </Link>
                    </div>
                    <div className='service_box'>
                    <img src={box3} alt=""/>
                    <Link to='/parts' className='no-decoration'>
                    <p>Body Parts</p>
                    </Link>
                    </div>
                    <div className='service_box'>
                    <img src={box5} alt=""/>
                    <Link to='/periodic' className='no-decoration'>
                    <p>Periodic Service</p>
                    </Link>
                    </div>
                    <div className='service_box'>
                    <img src={box6} alt=""/>
                    <Link to='/detailing' className='no-decoration'>
                    <p>Detailing Service</p>
                    </Link>
                    </div>
                    <div className='service_box'>
                    <img src={box7} alt=""/>
                    <Link to='/batteries' className='no-decoration'>
                    <p>Batteries</p>
                    </Link>
                    </div>
                    <div className='service_box'>
                    <img src={box8} alt=""/>
                    <Link to='/insurance' className='no-decoration'>
                    <p>Insurance</p>
                    </Link>
                    </div>
                    <div className='service_box'>
                    <img src={box9} alt=""/>
                    <Link to='/tires' className='no-decoration'>
                    <p>Tires</p>
                    </Link>
                    </div>
                    <div className='service_box'>
                    <img src={box0} alt=""/>
                    <Link to='/paint' className='no-decoration'>
                    <p>Painting</p>
                    </Link>
                    </div>
                
            
                </div>
            </div>

        // </Element>
    );
};
export default Servicecontainer
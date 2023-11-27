import React from 'react'
import './Periodic.css';
const Periodic = () => {
  return (
    <div className='periodic_container'>
    <h1 className='about_header'>Periodic Service</h1>
    <h1 className='about_header'><span>_____-</span></h1>
    <div className='about_para'>
      <ul>
        <li><span><i class="fa-regular fa-square-check"></i></span> Repiarfy is your go-to destination for hassle-free automotive care. </li>
        <li><span><i class="fa-regular fa-square-check"></i></span> Our expert technicians deliver quality repairs, utilizing cutting-edge diagnostics and genuine parts.</li>
        <li><span><i class="fa-regular fa-square-check"></i></span> Experience transparent pricing, convenient online scheduling, and timely updates. </li>
        <li><span><i class="fa-regular fa-square-check"></i></span> We prioritize customer satisfaction, providing a seamless and reliable service experience.</li>
        <li><span><i class="fa-regular fa-square-check"></i></span> Choose Repiarfy for excellence in automotive maintenance and repairs – where your journey meets our expertise.</li>
      </ul> 
      <button className='btn_1'> service Now</button>
      </div>
</div>
  )
}

export default Periodic
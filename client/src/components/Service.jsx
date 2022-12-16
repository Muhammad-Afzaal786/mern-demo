import React from 'react'
import img1 from "./assets/images/s1.png"
import img5 from "./assets/images/s5.png"
import img6 from "./assets/images/s6.png"



function Service() {
  return (
    <>
     <div className='main_service'>
        
     <div className="container">
     <p style={{color:" #f1c40f", fontWeight:"800"}}>SERVICE</p>
        <h2 className='my-4 text-white'>What Service I Offer You !</h2>
        <div className="row ">
            <div className="col-lg-3 col-md-6 col-sm-12">
            <div class="card card_div" >
            <img src={img6} class="crd_img mx-auto" alt="..."/>
            <div class="card-body">
                <h6 class="card-title">Web Development</h6>
               
            
            </div>
            </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
            <div class="card card_div" >
            <img src={img5} class="crd_img mx-auto" alt="..."/>
            <div class="card-body">
                <h6 class="card-title">API Intigration</h6>
               
            
            </div>
            </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
            <div class="card card_div" >
            <img src={img6} class="crd_img mx-auto" alt="..."/>
            <div class="card-body">
                <h6 class="card-title">Authentication</h6>
               
            
            </div>
            </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
            <div class="card card_div" >
            <img src={img1} class="crd_img mx-auto" alt="..."/>
            <div class="card-body">
                <h6 class="card-title">Software Development</h6>
               
            
            </div>
            </div>
            </div>
        </div>
     </div>
     </div>
    </>
  )
}

export default Service

import Navbar1 from "../Includes/Navbar";

function Service(){
    return(
        <div>
            <Navbar1/>
   <h1 className="hading">Our Services</h1>
 <div class="container marketing"> 
<div class="row">
  <div class="col-lg-3">
  <img src={require('../images/s1.jpg')}width="180" height="180"></img>
    <h3>Thlreading</h3>
  </div>

  <div class="col-lg-3">
    <img src={require('../images/s2.jpg')}width="180" height="180"></img>
<h3>Make Up</h3>
  </div>

  <div class="col-lg-3">
      <img src={require('../images/s3.jpg')}width="180" height="180"></img>
    <h3>Hair</h3>
  </div>

  <div class="col-lg-3">
      <img  src={require('../images/s4.jpg')}width="180" height="180"></img>
     <h3>Manicure</h3>
      </div>
</div>

    <div class="row pt-5">
      <div class="col-lg-3">
      <img src={require('../images/s5.jpg')}width="180" height="180"></img>
        <h3>Pedicure</h3>
      </div>

      <div class="col-lg-3">
        <img src={require('../images/s6.jpg')}width="180" height="180"></img>
   <h3>Waxing</h3>
      </div>

      <div class="col-lg-3">
          <img src={require('../images/s7.jpg')}width="180" height="180"></img>
        <h3>Facials</h3>
      </div>

      <div class="col-lg-3">
      <img src={require('../images/s8.jpg')}width="180" height="180"></img>
        <h3>Bleach</h3>
      </div>
    </div>

    <div class="row pt-5">
    <div class="col-lg-3">
      <img  class='image-wrap'src={require('../images/s9.jpg')}width="180" height="180"></img>
        <h3>Rejuvenation Therapies</h3>
      </div>
    
      <div class="col-lg-3">
      <img src={require('../images/s10.jpg')}width="180" height="180"></img>
        <h3>Clean Up</h3>
      </div>
      </div> 
    </div>
    </div>

        

        
    )
}
export default Service;
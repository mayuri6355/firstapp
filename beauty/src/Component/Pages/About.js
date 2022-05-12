import { Navbar } from "react-bootstrap";
import Navbar1 from "../Includes/Navbar";

function About(){
     return(
         <div>
           <Navbar1/>
          <div class='container'>
             <h1 className="h1">About Us </h1>
             <hr class="featurette-divider"></hr>

    <div class="row featurette">
      <div class="col-md-7 order-md-2">
        <h2 class="featurette-heading">NATURAL BEAUTY PARLOUR </h2>
        <p class="lead">Since opening its doors in 1994, our salon has been a full force establishing a reputation of mastery in hair cutting, facials, make up etc. Chitra Sharma gives you a classic experience from head to toe with the finest equipment and well trained staff.
Her unfaltering belief in providing with the highest standard of hair dressing, alongside exceptional customer service has led to a flourishing beauty salon in Udaipur.</p>
      </div>
      <div class="col-md-5 order-md-1">
        <img src={require('../images/img3.jpg')}width="500" height="500"></img> 

      </div>
    </div>
  
             </div>
             </div>
     )
}
 export default About;
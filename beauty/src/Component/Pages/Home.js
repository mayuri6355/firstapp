import Navbar1 from "../Includes/Navbar";
import About from "./About";
import ContactUs from "./Contact";
import Gellery from "./Gellery";
import Product from "./Products";
import Service from "./Services";
import { Link } from "react-router-dom";
import { ListGroup } from 'react-bootstrap';

function Home(){
    return(
        <div>
            <Navbar1/>
          
  <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src={require('../images/img5.webp')} height='500px' width='100%'></img>

        <div class="container">
          <div class="carousel-caption text-start">
            <h1>Example headline.</h1>
            <p>Some representative placeholder content for the first slide of the carousel.</p>
            <p><a class="btn btn-lg btn-primary" href="#">Book Appoinment</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
	  <img src={require('../images/img5.webp')} height='500px' width='100%'></img>

        <div class="container">
          <div class="carousel-caption">
            <h1>Another example headline.</h1>
            <p>Some representative placeholder content for the second slide of the carousel.</p>
            <p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
	  <img src={require('../images/img5.webp')} height='500px' width='100%'></img>

        <div class="container">
          <div class="carousel-caption text-end">
            <h1>One more for good measure.</h1>
            <p>Some representative placeholder content for the third slide of this carousel.</p>
            <p><a class="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  {/*-------About us----*/}

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


{/*---------  Produtcs------- */}

      <h1 className="hading">Our Products</h1>
       <div class="container marketing">
    <div class="row">
      <div class="col-lg-4">
      <img class="bd-placeholder-img rounded-circle" src={require('../images/p4.png')}width="180" height="180"></img>

        <h2>FACEPACK</h2>
        <p>face pack is used to rejuvenate the muscles, maintain the elasticity of the skin, remove adhered dirt particles and improve the blood circulation.</p>
        <button class="btn btn-primary" href="#">View details</button>
      </div>
      <div class="col-lg-4">
        <img class="bd-placeholder-img rounded-circle" src={require('../images/p1.webp')}width="180" height="180"></img>
   <h2>MAKEUP</h2>
        <p>: Moisturizer. Before you begin applying your makeup, take the time to prep your skin with a high-quality moisturizer.</p>
        <button class="btn btn-primary" href="#">View details</button>
      </div>
      <div class="col-lg-4">
          <img class="bd-placeholder-img rounded-circle" src={require('../images/p3.webp')}width="180" height="180"></img>

        <h2>WAX</h2>
        <p>Waxing is the process of hair removal from the root by using a covering of a sticky substance, such as wax, to adhere to body hair, and then removing this covering and pulling out the hair from the follicle.</p>
        <button class="btn btn-primary" href="#">View details</button>
      </div>
    </div>

            </div>

            {/*-------Services ---------*/}

            <div>
        
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
             {/*-------Gellery ---------*/}

             <div>
      
    
            <div className="l-main-container" id='portfolio'>
                <div className="container">
                    <div class='l-inner-page-container'>
                        <div className="row">
                            <div className="col-md-12">
                                <div class='row what_we_do'>
                                    <div class="col-md-12">
                                        <h2>OUR GELLERY</h2>
                                        <hr>
                                        </hr>
                                        <div class="b-category-filter--portfolio.b-category-filter">
                                      
                                        <ListGroup horizontal>
                                        <ListGroup.Item><a href="/pic">All Pics</a></ListGroup.Item>
                                        <ListGroup.Item><a href="/parlour">Parlour</a></ListGroup.Item>
                                        <ListGroup.Item><a href="/hair">Hair Cut</a></ListGroup.Item>
                                        <ListGroup.Item><a href="/bridal">Bridal-Makeup</a></ListGroup.Item>
                                        <ListGroup.Item><a href="#">Party-Makeup</a></ListGroup.Item>

                                        </ListGroup>
                                          </div>

<div class="container marketing"> 
<div class="row">

    <div class="row pt-5">
      <div class="col-lg-6">
      <img src={require('../images/pic1.jpg')}width="450" height="600"></img>
       
      </div>

      <div class="col-lg-6">
      <img src={require('../images/pic2.jpg')}width="450" height="600"></img>
      
      </div>
      
    <div class="row pt-5">
      <div class="col-lg-6">
      <img src={require('../images/pic3.jpg')}width="450" height="600"></img>
      </div>
      <div class="col-lg-6">
      <img src={require('../images/pic4.jpg')}width="450" height="600"></img>
      </div>

    </div>
          
    <div class="row pt-5">
      <div class="col-lg-6">
      <img src={require('../images/pic3.jpg')}width="450" height="600"></img>
      </div>
      <div class="col-lg-6">
      <img src={require('../images/pic4.jpg')}width="450" height="600"></img>
      </div>

    </div>

          
    <div class="row pt-5">
      <div class="col-lg-6">
      <img src={require('../images/pic5.jpg')}width="450" height="600"></img>
      </div>
      <div class="col-lg-6">
      <img src={require('../images/pic6.jpg')}width="450" height="600"></img>
      </div>

    </div>

    <div class="row pt-5">
      <div class="col-lg-6">
      <img src={require('../images/pic7.jpg')}width="450" height="600"></img>
      </div>
      <div class="col-lg-6">
      <img src={require('../images/pic8.jpg')}width="450" height="600"></img>
      </div>

    </div>

    <div class="row pt-5">
      <div class="col-lg-6">
      <img src={require('../images/pic9.jpg')}width="450" height="600"></img>
      </div>
      <div class="col-lg-6">
      <img src={require('../images/pic10.jpg')}width="450" height="600"></img>
      </div>

    </div>

    </div>
    </div>
    </div>
    </div>
      </div>
        </div>
           </div>
              </div>
                 </div>
                </div>
            </div>
            

            
        </div>


        
    )
}
 export default Home;
import Navbar1 from "../Includes/Navbar";
import { ListGroup } from 'react-bootstrap';

function Gellery(){
    return(
        <div>
            <Navbar1/>
    
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
                                        <ListGroup.Item><a href="#">Bridal-Makeup</a></ListGroup.Item>
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
            
    )
}
export default Gellery;
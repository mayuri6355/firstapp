
import Navbar1 from './Navbar';
import { ListGroup } from 'react-bootstrap';
function Parlour(){
    return(
       <div>
            <Navbar1/>
            <div class="b-category-filter--portfolio.b-category-filter">
                                      
                                      <ListGroup horizontal>
                                      <ListGroup.Item><a href="/pic">All Pics</a></ListGroup.Item>
                                      <ListGroup.Item><a href="/parlour">Parlour</a></ListGroup.Item>
                                      <ListGroup.Item><a href="/hair">Hair Cut</a></ListGroup.Item>
                                      <ListGroup.Item><a href="/bridal">Bridal-Makeup</a></ListGroup.Item>
                                      <ListGroup.Item><a href="#">Party-Makeup</a></ListGroup.Item>

                                      </ListGroup>
                                        </div>
<h1 className="hading">Parlour Photos</h1>
 <div class="container marketing"> 
<div class="row">

    <div class="row pt-5">
      <div class="col-lg-6">
      <img src={require('../images/p11.jpg')}width="450" height="600"></img>
       
      </div>

      <div class="col-lg-6">
      <img src={require('../images/p12.jpg')}width="450" height="600"></img>
      
      </div>
      
    <div class="row pt-5">
      <div class="col-lg-6">
      <img src={require('../images/p11.jpg')}width="450" height="600"></img>
      </div>
    
    </div>
          

    </div>

    </div>
    </div>
    </div>
  

        
    )
}
export default Parlour;
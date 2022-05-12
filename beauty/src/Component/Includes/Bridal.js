
import Navbar1 from './Navbar';
import { ListGroup } from 'react-bootstrap';
function Bridal(){
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
<h1 className="hading">Bridal Photos</h1>
 <div class="container marketing"> 
<div class="row">

    <div class="row pt-5">
      <div class="col-lg-6">
      <img src={require('../images/pic10.jpg')}width="450" height="600"></img>
       
      </div>

      <div class="col-lg-6">
      <img src={require('../images/pic5.jpg')}width="450" height="600"></img>
      
      </div>
      
    <div class="row pt-5">
      <div class="col-lg-6">
      <img src={require('../images/pic15.jpg')}width="450" height="600"></img>
      </div>
      <div class="col-lg-6">
      <img src={require('../images/pic15.jpg')}width="450" height="600"></img>
      
      </div>
    
    </div>
    <div class="row pt-5">
      <div class="col-lg-6">
      <img src={require('../images/pic16.jpg')}width="450" height="600"></img>
      </div>
      <div class="col-lg-6">
      <img src={require('../images/pic17.jpg')}width="450" height="600"></img>
      
      </div>
    
    </div>
          

    </div>

    </div>
    </div>
    </div>
  

        
    )
}
export default Bridal;
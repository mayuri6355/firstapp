import Navbar1 from "../Includes/Navbar";

function Product(){
    return(
        <div>
            <Navbar1/>
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
            </div>
    )
}
export default Product;
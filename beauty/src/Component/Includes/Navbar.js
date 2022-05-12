import { Nav,Container, Navbar} from 'react-bootstrap';
function Navbar1(){
    return(
        <div> 
        <Navbar className='nav' bg="dark" variant="dark sticky-top">
        <Container className='Nav'>
        <Navbar.Brand href="#home"><img src={require('../images/logo1.png')}>
        </img></Navbar.Brand>
        <Nav className=" ms-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/aboutus">AboutUs</Nav.Link>
          <Nav.Link href="/products">Products</Nav.Link>
          <Nav.Link href="/services">Services</Nav.Link>
          <Nav.Link href="/gellery">Gellery</Nav.Link>
          <Nav.Link href="/contactus">ContactUs</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
{/* 
  <div class="b-example-divider "></div>

<div class="container ">
  <header class=" d-flex justify-content-center py-2  ">
    <img src={require('../images/logo2.jpg') }height="80px" width="80px"></img>
    <ul class="nav nav-pills ms-auto text-white">
      <li class="nav-item"><a href="/" class="nav-link active" aria-current="page">Home</a></li>
      <li class="nav-item"><a href="/aboutus" class="nav-link">AboutUs</a></li>
      <li class="nav-item"><a href="/products" class="nav-link">Products</a></li>
      <li class="nav-item"><a href="/services" class="nav-link">Services</a></li>
      <li class="nav-item"><a href="/gellery" class="nav-link">Gellery</a></li>
      <li class="nav-item"><a href="/contactus" class="nav-link">ContactUs</a></li>
    </ul>
  </header>
</div> */}

      </div>
    )
}
export default Navbar1;
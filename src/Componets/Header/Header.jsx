import React, { useState } from 'react'
import { Badge, Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import '../Header/Header.css'
import { Link } from 'react-router-dom'


function Header() {

  const productData = useSelector(state => state.productreducer.products)

  const [productd , setproductdata] = useState(productData);
  // console.log(productd);



  

  return (

    // <Navbar expand="lg" className="bg-primary">
    //   <Container className=''>
    //     <Nav className="me-auto my-2 p-2">
    //       <Link to={'/view'}>   <Button variant="primary">
    //       <i class="fa-solid fa-cart-shopping"></i> <Badge bg="danger">{productData.length}</Badge>
    //         <span className="visually-hidden">unread messages</span>
    //       </Button>
    //       </Link>


    //     </Nav>
    //   </Container>
    // </Navbar>
    <div class="wrapper">

      <nav className="main-nav">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/student'>Add Student</Link> </li>
          <li><Link to={'/view'}>
          View Student

          </Link></li>
          <li><Link to='/gita'>Bhagavat Gita</Link> </li>
          <li><Link to='/singUp'><i class="fa-solid fa-user"></i>
          </Link></li>

      

        </ul>
      </nav>
    </div>

  )
}

export default Header
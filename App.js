import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav, NavDropdown, Form, Button, Carousel, Card, Modal, Row, Col } from 'react-bootstrap';
import Cart from './Cart'; // Import the Cart component


function App() {
  const [showContact, setShowContact] = useState(false);

  const handleCloseContact = () => setShowContact(false);
  const handleShowContact = () => setShowContact(true);

  const books = [
    {
      title: "No Longer Human",
      author: "Osamu Dazai",
      price: "$10",
      description: "This is a brief description of No Longer Human.",
      cover: "NH.jpg"
    },
    {
      title: "Six Of Crows",
      author: "Leigh Bardugo",
      price: "$12",
      description: "This is a brief description of Six Of Crows.",
      cover: "SC.jpg"
    },
    {
      title: "Single On Purpose",
      author: "John Kim",
      price: "$15",
      description: "This is a brief description of Single On Purpose.",
      cover: "SP.jpg"
    }
  ];
  const [cartItems, setCartItems] = useState([]);


  return (
    <div>
      {/* Header with Navbar */}
      <Navbar expand="lg" className="navbar fixed-top">
  <Container fluid>
    <Navbar.Brand href="#">Book$tore</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav className="me-auto my-2 my-lg-0" navbarScroll>
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#books">Books</Nav.Link>
        <NavDropdown title="Categories" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#fiction">Fiction</NavDropdown.Item>
          <NavDropdown.Item href="#nonfiction">Non-Fiction</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#bestsellers">Best Sellers</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#about">About Us</Nav.Link>
        <Nav.Link href="#cart">Cart</Nav.Link>
        <Nav.Link href="#contact" onClick={handleShowContact}>Contact</Nav.Link>
      </Nav>
      <Form.Control
  type="search"
  placeholder="Search"
  className="me-2"
  aria-label="Search"
  style={{
    border: 'none',
    borderBottom: '1px solid rgba(255, 255, 255, 0.5)',
    backgroundColor: 'transparent',
    color: 'white',
    outline: 'none', // Remove outline on focus
    width: '350px', // Adjust width as needed
    textAlign: 'left', // Align text to right
    fontWeight: 'bold' // Make text bold
  }}
/>

  </Navbar.Collapse>
  </Container>
</Navbar>


      {/* Carousel */}
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="image1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="image2.jpg"
            alt="Second slide"
          />
      
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="image3.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      {/* Book Cards */}
      <Container className="mt-4">
        <Row>
          {books.map((book, index) => (
            <Col key={index} sm={12} md={6} lg={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={process.env.PUBLIC_URL + '/' + book.cover} />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>by {book.author}</Card.Text>
                  <Card.Text>{book.price}</Card.Text>
                  <Card.Text>{book.description}</Card.Text>
                  <Button variant="primary" className="me-2">Add to Cart</Button>
                  <Button variant="secondary">View Details</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Contact Modal */}
      <Modal show={showContact} onHide={handleCloseContact}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Cart cartItems={cartItems} />


      {/* Footer */}
      <footer className="footer">
      <div className="container text-center">
        <p>&copy; 2024 All Rights Reserved</p>
      </div>
    </footer>

    </div>
  );
}

export default App;

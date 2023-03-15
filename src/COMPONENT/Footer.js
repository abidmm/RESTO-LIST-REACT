import React from 'react'
import { Card, Button, Row, Col , Form , InputGroup} from 'react-bootstrap'



function Footer() {
  return (
    <div >
      <Card >
        <Card.Header>Featured</Card.Header>
        <Card.Body className='container'>
          {/* <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text> */}
          <Row>
            <Col md={6}>
              <InputGroup>
        <Form.Control type='text' placeholder='example@email.com' style={{width:'10%'}}  /><InputGroup.Text ><h3 className='m-auto'>SUBSCRIBE</h3></InputGroup.Text>
</InputGroup>


            </Col>
            <Col md={3} className=''>
         



            </Col>
            <Col md={3}>
            
         <h5>   Get Certified</h5>
HTML Certificate,
CSS Certificate,
JavaScript Certificate,
Front End Certificate,
SQL Certificate,
Python Certificate,
PHP Certificate,



            </Col>
  
          </Row>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Footer
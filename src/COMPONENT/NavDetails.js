import React, { useEffect, useState } from 'react'
import { Row , Col,} from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function NavDetails() {
    const [details,setDetails]=useState([])
    const fetchData = async()=>{
        await fetch('/restaurants.json')
        .then((res)=>res.json())
        .then((data)=>setDetails(data.restaurants))
    }
    useEffect(()=>{
        fetchData()
    },[])
    console.log('data',details)
  return (
    
    <Row>
        {details?.map((item)=>(
            
             <Col sm={12} md={8} lg={6} xl={3} className="py-4 px-4" >
                <Link to ={`nav/${item.id}`}>
        <Card border="primary" style={{ width: '18rem' }}>
        <Card.Header>{item.name}</Card.Header>
        <Card.Body>
          <Card.Title>{item.neighborhood}</Card.Title>
          <Card.Text>
        {item.address}
          </Card.Text>
        </Card.Body>
      </Card>
      </Link>

             </Col>
        ))}
        
        
    </Row>
  )
}

export default NavDetails
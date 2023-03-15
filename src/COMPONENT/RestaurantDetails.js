import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Card, Image, ListGroup } from 'react-bootstrap'
import { Reviews } from './Reviews'


function RestaurantDetails() {
    const [data, setData] = useState([])
    const params = useParams()
    const fetchData = async () => {
        await fetch('/restaurants.json')
            .then((res) => res.json())
            .then((item) => setData(item.restaurants))
    }
    useEffect(() => {
        fetchData()
    }, [])
    console.log("data", data)
    console.log("para", params.id)

    const details = data.find((i) => i.id == params.id)
    return (
        <div>
            <Link to='/' className='btn btn-outline-dark my-2 rounded btn-sm'>Back</Link>
            {details ? (
                <Row className='my-3'>
                    <Col md={4}>
                        <Image className='img' src={details.photograph} fluid />
                    </Col>
                    <Col md={4}>
                        <ListGroup>
                            <ListGroup.Item>
                                <h2>{details.name}</h2>
                                <h2>{details.neighborhood}</h2>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <p>Cuisine: {details.cuisine_type}</p>
                                <p>Address: {details.address}</p>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={4}>
                        <ListGroup>
                            <ListGroup.Item>
                                <h4>Operating Hours: </h4>
                                <p>Monday: {details.operating_hours.Monday}</p>
                                <p>Tuesday: {details.operating_hours.Tuesday}</p>
                                <p>Wednesday: {details.operating_hours.Wednesday}</p>
                                <p>Thurday: {details.operating_hours.Thursday}</p>
                                <p>Friday: {details.operating_hours.Friday}</p>
                                <p>Saturday: {details.operating_hours.Saturday}</p>
                                <p>Sunday: {details.operating_hours.Sunday}</p>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Row>
                        <Card className='my-3 mx-3 p-3 rounded card'>
                            <Reviews data={details.reviews} />
                        </Card>
                    </Row>
                </Row>
            ) : 'null'}
        </div>
    )
}

export default RestaurantDetails
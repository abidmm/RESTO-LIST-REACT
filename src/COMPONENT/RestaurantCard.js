import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function RestaurantCard({ datas }) {
    return (
        <Link to={`details/${datas.id}`} style={{ textDecoration: 'none' }}>
            <Card className='p-3 my-3' style={{}}>
                <Card.Img src={datas.photograph} variant='top' className='p-3' />
                <Card.Body>
                    <Card.Title><h2>{datas.name} </h2></Card.Title>
                    <Card.Text>
                        <p>
                            Cuisine: {datas.cuisine_type}
                        </p>
                        <p>
                            Neighbourhood: {datas.neighborhood}
                        </p>
                    </Card.Text>
                </Card.Body>

            </Card>
        </Link>
    )
}

export default RestaurantCard
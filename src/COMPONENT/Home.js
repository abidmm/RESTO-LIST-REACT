import React from 'react'
import { useEffect } from 'react'
// import { useState } from 'react'
import RestaurantCard from './RestaurantCard'
import { Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { restaurantDataAction } from '../ACTIONS/restaurantAction'

function Home() {
    // const [resto, setResto] = useState([])
    // const fetchData = async () => {
    //     await fetch('/restaurants.json')
    //         .then((res) => res.json())
    //         .then((item) => setResto(item.restaurants))
    // }

    const dispatch = useDispatch()
    const restaurantData = useSelector(state => state.restaurantReducer)
    const { resto } = restaurantData

    useEffect(() => {
        // fetchData()
        dispatch(restaurantDataAction())
    }, [])
    
    console.log('data is ', resto)
    return (

        <Row>
            
            {resto?.map((items) => (
                <Col sm={12} md={8} lg={6} xl={3} >
                <RestaurantCard datas={items} />
                </Col>
            ))}
        </Row>
    )
}

export default Home
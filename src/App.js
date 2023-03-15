import React from 'react'
import Header from './COMPONENT/Header'
import Footer from './COMPONENT/Footer'
import Home from './COMPONENT/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RestaurantDetails from './COMPONENT/RestaurantDetails'
import { Container } from 'react-bootstrap'
import NavDetails from './COMPONENT/NavDetails'


function App() {
  return (

    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/details/:id' element={<RestaurantDetails />} />
            <Route path='/NavDetails' element={<NavDetails/>}/>
            <Route path='/NavDetails/nav/:id' element={<RestaurantDetails/>}/>
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>


  )
}

export default App
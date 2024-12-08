import React from 'react'
import '../styles/tour-details.css'
import {Container, Row,Col,Form,ListGroup} from 'reactstrap'

import {useParams} from 'react-router-dom'
import tourData from '../assets/data/tours'
import calculateAvgRating from '../utils/avgRating'

const TourDetails = () => {

  const {id} = useParams()

  // This is an Static Data  later we will  call our API and load our data from database
  const tour =tourData.find(tour=> tour.id===id)

  // destructure props from tour object
  const {photo,title ,desc, price, address, reviews,city,distance, maxGroupSize} = tour;

  const {totalRating,avgRating} = calculateAvgRating (reviews)





  return <>
   <section>
    <Container>
      <Row>
        <Col lg='8'>'
        <div  className='tour__content'>
          <img src={photo} alt="Pictures"/>
          <div className='tour__info'>
            <h2>{title}</h2>


              <div className='d-flex align-items-center gap-5'>
              <span className='tour__location d-flex align-items-center gap-1'>
            <i class="ri-star-fill" style={{color:"var(--secondary-color)"}}>
            </i>{calculateAvgRating === 0 ? null : avgRating}
          {totalRating === 0 ? 'Not Rated' : <span> ({reviews?.length})</span> }
          </span>

          <span>
          <i class="ri-map-pin-user-line"></i> {address}
          </span>
           </div>

   <div className='tour__extra-details'>
    <span><i class="ri-map-pin-2-line"></i></span>
   </div>


          </div>
        </div>
        </Col>
      </Row>
    </Container>
   </section>

  </>
    
  
}

export default TourDetails

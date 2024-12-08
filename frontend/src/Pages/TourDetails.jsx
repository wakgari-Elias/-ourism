import React,{useRef,useState} from 'react'
import '../styles/tour-details.css'
import {Container, Row,Col,Form,ListGroup} from 'reactstrap'

import {useParams} from 'react-router-dom'
import tourData from '../assets/data/tours'
import calculateAvgRating from '../utils/avgRating'
import avatar from '../assets/images/avatar.jpg';
import Booking from '../components/Booking/Booking'

const TourDetails = () => {

  const {id} = useParams();
 const reviewMsRef=useRef('')


 const [tourRating, setTourRating] = useState(null);
 const handleRatingClick = (rating) => {
  setTourRating(rating);
  // Update UI or perform other actions based on the selected rating
};



  // This is an Static Data  later we will  call our API and load our data from database
  const tour =tourData.find(tour=> tour.id===id)

  // destructure props from tour object
  const {photo,title ,desc, price, address, reviews,city,distance, maxGroupSize} = tour;

  const {totalRating,avgRating} = calculateAvgRating (reviews);


  // format Rating 
  const options = { day:"numeric", month:"long" , year:"numeric" };

  // submit request to the server 
  const submitHandler = e =>{
    e.preventDefault()
    const reviewText =reviewMsRef.current.value
    // alert(`${reviewText}, ${tourRating}`);

    // later we will call our API to save the review

  }






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
            </i>{avgRating === 0 ? null : avgRating}
          {totalRating === 0 ? 'Not Rated' : <span> ({reviews?.length})</span> }
          </span>
          <span>
          <i class="ri-map-pin-user-line"></i> {address}
          </span>
           </div>

   <div className='tour__extra-details'>
    <span><i class="ri-map-pin-2-line"></i> {city} </span>

    <span>   <i class="ri-money-dollar-circle-line"></i> ${price}/per person </span>
    <span>   <i class="ri-map-pin-time-line"></i>{distance}K/m </span>


    <span>  <i class="ri-group-line"></i> {maxGroupSize} people </span>
   </div>

   <h5>Description</h5>
   <p> {desc}</p>
   </div>
  {/* ============= Tour Reviews Section ============ */}
 <div className='tour__reviews mt-4'>
  <h4>Reviews ({reviews?.length} reviews)</h4>

  <Form onSubmit={submitHandler}>
<div  className='d-flex align-items-center gap-3 mb-4 rating__group'>
  <span onClick={()=>handleRatingClick(1)}> 1<i class="ri-star-s-fill"></i> </span>
  <span  onClick={()=>handleRatingClick(2)}> 2<i class="ri-star-s-fill"></i> </span>
  <span onClick={()=>handleRatingClick(3)} > 3<i class="ri-star-s-fill"></i> </span>
  <span onClick={()=>handleRatingClick(4)}> 4<i class="ri-star-s-fill"></i> </span>
  <span onClick={()=>handleRatingClick(5)}> 5<i class="ri-star-s-fill"></i>  </span>
</div>

 <div className='review__input'>
  <input 
  type='text'  
  ref={reviewMsRef} 
  placeholder='Share us you Thoughts' 
  required
   />
  <button className='btn primary__btn  text-white' type='submit'>
    Submit
  </button>

 </div>
  </Form>


<ListGroup className='user__reviews'>
  {
    reviews?.map(review=>(
      <div className='review__item'>
        <img src={avatar} alt="" />

        <div className='w-100'>
          <div className='d-flex align-items-center justify-content-between'>

          <div>
            <h5>Elias</h5>
            <p>
              {
                new Date ("12-07-2024").toLocaleDateString(
                  "en-US",
                  options
                )}
            </p>
          </div>
          <span className='d-flex align-items-center'>
            5<i class="ri-star-s-fill"></i>
          </span>
          </div>

          <h6>Amazing Tour</h6>
        </div>
      </div>
    ))
  }

</ListGroup>

 </div>

  {/* ============= Tour Reviews Section End ============ */}
        </div>
        </Col>

        <Col lg='4'>
      <Booking tour={tour}  avgRating={avgRating}/>
        
        </Col>
      </Row>
    </Container>
   </section>

  </>
    
  
}

export default TourDetails

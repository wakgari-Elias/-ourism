import React from 'react'
import './booking.css'
import {Form, FormGroup, ListGroup, ListGroupItem, Button} from 'reactstrap'

const Booking = ({tour,avgRating}) => {

 const {price, reviews} =tour;

 const handleChange = e =>{};

  return (
    <div className='booking'>
        <div className='booking__top d-flex align-items-center 
        justify-content-between'>
            <h3>${price} <span>/per Person</span></h3>

            <span className='tour__location d-flex align-items-center '>
            <i class="ri-star-fill"></i>
            {avgRating === 0 ? null : avgRating} ({reviews?.length})
          </span>
        </div>
      

      {/* =============Booking Form ======== */}
         <div className='booking__form'>
            <h5>Information</h5>
            <Form className='booking__info-form'>
                <FormGroup>
                    <input type="text" placeholder=' Full Name' id='fullname'
                     required onChange={handleChange}
                    />
                </FormGroup>

                <FormGroup>
                    <input type="number" placeholder=' Phone' id='phone'
                     required onChange={handleChange}
                    />
                </FormGroup>

                <FormGroup className='d-flex align-items-center gap-3'>
                    <input 
                    type="date" 
                    placeholder=' ' 
                    id='bookAt'
                     required 
                     onChange={handleChange}
                    />

                     <input 
                     type="number" 
                     placeholder='Guest ' 
                     id='guestSize'
                     required onChange={handleChange}
                    />
                </FormGroup>
            </Form>
         </div>
     
      {/* =============Booking End ======== */}

      <div className='booking__bottom'>

        <ListGroupItem className='border-0 px-0'>
<h5> ${price}  <i class="ri-close-line"></i> 1 Person</h5>
<span>${price}</span>
        </ListGroupItem>

        <ListGroupItem className='border-0 px-0'>
<h5>Service Charge </h5>
<span>$10</span>
        </ListGroupItem>
        <ListGroupItem className='border-0 px-0'>
<h5> Total</h5>
<span>$109</span>
        </ListGroupItem>

      </div>

      {/* ========Booking bottom============= */}
    </div>
  )
}

export default Booking

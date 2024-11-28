import React from 'react'
import Slider from "react-slick"
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonials = () => {

const settings ={
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    // slidesToScroll: 1,
    swipeToSlide:true,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,

            },
        },
    ]

}




  return (
    <Slider {...settings}>
        <div className='testimonial py-4 px-3'>
            <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>

<div className='d-flex items-center gap-4 mt-3 '>
    <img src={ava01} alt="Avatar" className=' w-25 h-25 rounded-2'/>
    <div>
     <h6 className='mb-0 mt-3 '>John Doe</h6>
     <p>Customer</p>
    </div>
</div>
 </div>

 <div className='testimonial py-4 px-3'>
            <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>

<div className='d-flex items-center gap-4 mt-3 '>
    <img src={ava02} alt="Avatar" className=' w-25 h-25 rounded-2'/>
    <div>
     <h6 className='mb-0 mt-3 '>Lia Frank</h6>
     <p>Customer</p>
    </div>
</div>
 </div>

 <div className='testimonial py-4 px-3'>
            <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>

<div className='d-flex items-center gap-4 mt-3 '>
    <img src={ava03} alt="Avatar" className=' w-25 h-25 rounded-2'/>
    <div>
     <h6 className='mb-0 mt-3 '>John Dane</h6>
     <p>Customer</p>
    </div>
</div>
 </div>

 <div className='testimonial py-4 px-3'>
            <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>

<div className='d-flex items-center gap-4 mt-3 '>
    <img src={ava01} alt="Avatar" className=' w-25 h-25 rounded-2'/>
    <div>
     <h6 className='mb-0 mt-3 '>John Doe</h6>
     <p>Customer</p>
    </div>
</div>
 </div>

 <div className='testimonial py-4 px-3'>
            <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>

<div className='d-flex items-center gap-4 mt-3 '>
    <img src={ava02} alt="Avatar" className=' w-25 h-25 rounded-2'/>
    <div>
     <h6 className='mb-0 mt-3 '>Lia Frank</h6>
     <p>Customer</p>
    </div>
</div>
 </div>

 <div className='testimonial py-4 px-3'>
            <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>

<div className='d-flex items-center gap-4 mt-3 '>
    <img src={ava03} alt="Avatar" className=' w-25 h-25 rounded-2'/>
    <div>
     <h6 className='mb-0 mt-3 '>John Dane</h6>
     <p>Customer</p>
    </div>
</div>
 </div>
 <div className='testimonial py-4 px-3'>
            <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>

<div className='d-flex items-center gap-4 mt-3 '>
    <img src={ava01} alt="Avatar" className=' w-25 h-25 rounded-2'/>
    <div>
     <h6 className='mb-0 mt-3 '>John Doe</h6>
     <p>Customer</p>
    </div>
</div>
 </div>

 <div className='testimonial py-4 px-3'>
            <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>

<div className='d-flex items-center gap-4 mt-3 '>
    <img src={ava02} alt="Avatar" className=' w-25 h-25 rounded-2'/>
    <div>
     <h6 className='mb-0 mt-3 '>Lia Frank</h6>
     <p>Customer</p>
    </div>
</div>
 </div>

 <div className='testimonial py-4 px-3'>
            <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>

<div className='d-flex items-center gap-4 mt-3 '>
    <img src={ava03} alt="Avatar" className=' w-25 h-25 rounded-2'/>
    <div>
     <h6 className='mb-0 mt-3 '>John Dane</h6>
     <p>Customer</p>
    </div>
</div>
 </div>



 
      
    </Slider>
  )
}

export default Testimonials

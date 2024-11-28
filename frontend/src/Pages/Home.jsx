import React from 'react'
import '../styles/home.css'

import { Container,Row,Col } from 'reactstrap'
import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import experienceImg  from '../assets/images/experience.png'

import Subtitle from '../shared/Subtitle'

import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList'

import MasonryImagesGallery from '../components/image-gallery/MasonryImagesGallery'
import Testimonials from '../components/Testimonial/Testimonials'
import NewsLetter from '../shared/NewsLetter'


const Home = () => {
  return (
    <>
                                    
     {/* =====================hero start Section ==================== */}


    <section>
      <Container>
        <Row>
          <Col lg='6'>
          <div className='hero__content'>
            <div className='hero__subtitle d-flex align-items-center'>
              <Subtitle  subtitle={'Know Before You Go!'}/>
              <img src={worldImg} alt='WorldImage'/>
            </div>
            <h1> Travel opens the door to creating  <span className='highlight'>Memories</span></h1>
            <p> Traveling not only broadens our horizons but also creates unforgettable memories 
              that last a lifetime. Each destination brings unique experiences—whether 
              it’s discovering new cultures, tasting exotic cuisines, or meeting people 
              from different backgrounds, every journey offers something special. 
              The thrill of exploring unfamiliar places, embracing adventure, and 
              stepping out of our comfort zones transforms us, giving us stories to 
              share and moments to cherish.</p>
          </div>
          </Col>

          <Col lg='2'>
          <div className='hero__img-box'>
            <img src={heroImg} alt='HeroImage'/>
          </div>
          </Col>

          <Col lg='2'>
          <div className='hero__img-box mt-4'>
            <video src={heroVideo} alt='Video' controls/>
          </div>
          </Col>

          <Col lg='2'>
          <div className='hero__img-box mt-5'>
            <img src={heroImg02} alt='HeroImage02'/>
          </div>
          </Col>

          <SearchBar />


        </Row>
      </Container>
      </section>


      {/* ============= Hero Section Start =============== */}
      <section>
        <Container>
          <Row>
          <Col lg='3'>
      <h5 className='service__subtitle'>What we Serve</h5>
      <h2 className='service__title'>We Offer Our Best Services</h2>
      </Col>
      <ServiceList />

          </Row>
        </Container>
      </section>

{/* ====== feature tour section start ======== */}
<section>
  <Container>
    <Row>
      <Col lg='12' className='mb-5'>
    <Subtitle subtitle={"Explore"}/>
    <h2 className='featured__tour-title'>Our Featured Tours</h2>
      </Col>
     <FeaturedTourList />

    </Row>
  </Container>
</section>

{/* ====== feature tour section End ======== */}

{/* ====== experience  section start ======== */}

<section>
  <Container>
    <Row>
      <Col lg='6' >
      <div className='experience__content'>
        <Subtitle subtitle={'Experience'}/>
        <h2> With Our experience <br/> We will Serve You</h2>
        <p>With our expertise in travel and hospitality, we're committed 
         <br/> to providing personalized service and exceptional guidance.
          <br/> Whether it's finding the perfect destination or crafting the ideal itinerary, 
          <br/> we ensure your journey is seamless, memorable, and tailored to your needs.</p>


      </div>

      <div className='counter__wrapper d-flex align-items-center gap-5'>
        <div className='counter__box'>
          <span> 12k+</span>
          <h6> Successful Trip</h6>
        </div>
        <div className='counter__box'>
          <span> 2k+</span>
          <h6> Regular Clients</h6>
        </div>   <div className='counter__box'>
          <span> 15+</span>
          <h6> Years Of Experience</h6>
        </div>
      </div>


      </Col>
      <Col lg='6' >
      <div className='experience__img'>
        <img src={experienceImg} alt="experience" />
      </div>
      </Col>
    </Row>
  </Container>
</section>

{/* ====== experience  section end ======== */}


{/* ====== Gallery   section Start ======== */}

<section>
  <Container>
    <Row>
      <Col lg='12' >
      <Subtitle subtitle={'Gallery'}/>
      <h2 className='gallery__title'>Visit Our Customers Tour Gallery </h2>

      </Col>
      <Col lg='12'>
      <MasonryImagesGallery />
      </Col>
    </Row>
  </Container>
</section>

{/* ====== Gallery   section end ======== */}


{/* ====== Testimonial   section Start ======== */}

<section>
  <Container>
    <Row>
      <Col lg='12' >
      <Subtitle subtitle={'Fans Love'}/>
      <h2 className='testimonial__title'>What Our Fans Say About Us</h2>
      </Col>
      <Col lg='12'>
      <Testimonials />
      </Col>
    </Row>
  </Container>
</section>

{/* ====== Testimonial   section End ======== */}


<NewsLetter/>

    </>
  )
}

export default Home

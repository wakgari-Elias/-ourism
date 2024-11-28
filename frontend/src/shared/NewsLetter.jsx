import React from 'react'
import './newsletter.css'
import { Container,Row,Col } from 'reactstrap'
import maleToursit from '../assets/images/male-tourist.png'

const NewsLetter = () => {
  return (
    <section className='newsletter'>
        <Container>
            <Row>
                <Col lg="6">
                <div className='newsletter__content'>
                    <h2>Get Exclusive Offers and Updates</h2>
                  
                        <div className='newsletter__input'>
                            <input type="email" placeholder='Enter your email address'/>
                            <button className='btn newsletter__btn'>Subscribe</button>
                        </div>

                        <p>Sign up for our newsletter to get the latest news, offers and updates from us
                        </p>

                </div>
                </Col>
                <Col lg="6">
                <div className='newsletter__img'>
                    <img src={maleToursit} alt="male tourist" />
                </div>
                </Col>
            </Row>
        </Container>
      
    </section>
  )
}

export default NewsLetter

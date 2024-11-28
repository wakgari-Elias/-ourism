import React from 'react'
import ServiceCard from './ServiceCard'

import { Col } from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'


const serviceData =[
  {
    imgUrl:weatherImg,
    title: "Calculate weather",
    desc:"Use the city Weather to grab You Jacker",
  },
  {
   imgUrl: guideImg,
   title:"Best Tour Guide",
   desc:"Get the best tour guide to explore the city",
  },{
    imgUrl:customizationImg,
    title:"Customization",
    desc:"Customize your tour according to your needs",
  }
]



const ServiceList = () => {
  return (
  <>
{
  serviceData.map((item, index) => (
    <Col lg='3' key={index} >
      <ServiceCard item={item} />

    </Col>))
}



  </>
  )
}

export default ServiceList

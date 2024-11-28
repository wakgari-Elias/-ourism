import React from 'react';
import TourCard from '../../shared/TourCard';
import tourData from '../../assets/data/tours';
import { Col, Row } from 'reactstrap';

const FeaturedTourList = () => {
  return (
    <Row>
      {
      tourData?.map(tour => (
        <Col lg="3" className="mb-4" key={tour.id}>
          <TourCard tour={tour} />
        </Col>
      ))}
    </Row>
  );
  
};

export default FeaturedTourList;

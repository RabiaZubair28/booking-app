import React from 'react'
import { useParams } from 'react-router-dom';
import data from '../../data/hotels-data/hotels.json';
import '../../styles/hotels-styles/hotelDetails.css';
import {Container, Row, Col, Form, FormGroup} from 'reactstrap';
import { Link } from 'react-router-dom';
const HotelDetails = () => {
    
const i = useParams().hotelId;

const { id, city,hotel,description,image,price,arrival,departure,guests} = data[i-1];
    return(

    <section>
        <Container>
            <Row>
                <Col lg="8">
                    <div className='tourContent'>
                        <img src={image} height={380} width={800} alt='' />

                        <div className='tourInfo'>
                            <h2>{hotel} ({city})</h2>
                            <div className='tourDescription'>
                                    {description}
                            </div>
                            <div className='tourDates'>
                                <h6>Available Arrival Dates: <span>{arrival}</span></h6>
                                <h6>Available Departure Dates: <span>{departure}</span></h6>
                            </div>
                            <div className='tourPrice'>
                            <i class="ri-hand-coin-line"></i><span>  Price: {price}</span>
                            </div>
                            
                        </div>
                    </div>
                </Col>
                <Col lg='4'>
        <div className="form">
            <Form>
                <FormGroup className="d-flex gap-3 formGroup formGroupFast">
                    <span>
                        <i class="ri-account-circle-line"></i>
                    </span>
                    <div>
                        <h6>Full Name: </h6>
                        <input type="text" placeholder='Enter Your Full Name...' />
                    </div>
                    
                </FormGroup>
                <FormGroup className="d-flex gap-3 formGroup formGroupLast">
                    <span>
                        <i class="ri-phone-line"></i>
                    </span>
                    <div>
                        <h6>Phone Number: <span className='mandatory'>*</span></h6>
                        <input type="number"  placeholder='Enter Your Number...' required />
                    </div>
                </FormGroup>
                <FormGroup className="d-flex gap-3 formGroup formGroupLast">
                    <span>
                        <i class="ri-mail-add-line"></i>
                    </span>
                    <div>
                        <h6>Email: <span className='mandatory'>*</span> </h6>
                        <input type="email"  placeholder='Enter Your Email...' required   />
                    </div>
                </FormGroup>
                <FormGroup className="d-flex gap-3 formGroup formGroupLast">
                    <span>
                        <i class="ri-building-line"></i>
                    </span>
                    <div>
                        <h6>City</h6>
                        <input type="text"  placeholder='Enter You City Name...'  />
                    </div>
                </FormGroup>
            </Form>
            <Link to="/home" className="pay text-center" type="submit" >
                    Pay Now
                </Link>
        </div>
        
    </Col>
            </Row>
        </Container>
    </section>
    
    )
}


export default HotelDetails
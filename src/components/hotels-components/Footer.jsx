import React from 'react'
import '../../styles/hotels-styles/hotels.css';
import { Container, Row, Col } from 'reactstrap';

const Footer = () => {
  return (
    <section className='bg'>
        <Container>
      <Row class="section__container footer__container d-flex align-items-center">
        <Col lg="5" class="footer__col">
        <div className="logo">
            <span className='raw raw2'>RAW</span>
            <span className='explorer'>-TheExplorers</span>
        </div>
          <p class="description pe-5 section__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
            laudantium unde. Doloremque eaque debitis laborum labore voluptates
            iste molestiae consectetur.
          </p>
          <ul class="footer__socials">
            <li>
              <a href="#"><i class="ri-youtube-fill"></i></a>
            </li>
            <li>
              <a href="#"><i class="ri-instagram-line"></i></a>
            </li>
            <li>
              <a href="#"><i class="ri-facebook-fill"></i></a>
            </li>
            <li>
              <a href="#"><i class="ri-linkedin-fill"></i></a>
            </li>
          </ul>
        </Col>
        <Col lg="3" class="footer__col">
          <h4 className='description2'>Services</h4>
          <div class="footer__links">
            <li className='description'><a href="#">Online Booking</a></li>
            <li className='description'><a href="#">Room Customization</a></li>
            <li className='description'><a href="#">Virtual Tours</a></li>
            <li className='description'><a href="#">Special Offers</a></li>
            <li className='description'><a href="#">Concierge Services</a></li>
            <li className='description'><a href="#">Customer Support</a></li>
          </div>
        </Col>
        <Col lg="3" class="footer__col">
          <h4 className='description2'>Contact Us</h4>
          <div class="footer__links">
            <li>
              <span><i class="ri-phone-fill"></i></span>
              <div>
                <h5>Phone Number</h5>
                <p className='text-light'>+91 9876543210</p>
              </div>
            </li>
            <li>
              <span><i class="ri-record-mail-line"></i></span>
              <div>
                <h5>Email</h5>
                <p className='text-light'>info@hotelmiranda.com</p>
              </div>
            </li>
            <li>
              <span><i class="ri-map-pin-2-fill"></i></span>
              <div>
                <h5>Location</h5>
                <p className='text-light'>First St. NYC</p>
              </div>
            </li>
          </div>
        </Col>
      </Row>
    </Container>
    </section>
  )
}

export default Footer
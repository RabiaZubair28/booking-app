import React from 'react'
import '../styles/hotels-styles/hotels.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col } from 'reactstrap';
import heroImg from '../hotels-images/about-2.jpg';
import heroImg02 from '../hotels-images/hero-img02.jpg';
import heroVideo from '../hotels-images/luxury.mp4';
import SearchBar from '../shared/hotels-shared/SearchBar';

import room1 from '../hotels-images/room-1.jpg';
import room2 from '../hotels-images/room-2.jpg';
import room3 from '../hotels-images/room-3.jpg';

import menu1 from '../hotels-images/menu-1.jpg';
import menu2 from '../hotels-images/menu-2.jpg';
import menu3 from '../hotels-images/menu-3.jpg';
import menu4 from '../hotels-images/menu-4.jpg';
import menu5 from '../hotels-images/menu-5.jpg';
import menu6 from '../hotels-images/menu-6.jpg';
import menu7 from '../hotels-images/menu-7.jpg';
import menu8 from '../hotels-images/menu-8.jpg';
import menu9 from '../hotels-images/menu-9.jpg';

const Hotels = () => {
  
  return (
    <>
    <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="heroContent">
              <h1>
               <span className="highlight">Travelling opens the door to creating</span>
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Totam tempora a temporibus, placeat consectetur 
                modi qui! Praesentium ex expedita esse debitis totam 
                neque, iure eaque labore culpa deserunt quia exercitationem?
              </p>
            </div>
          </Col>
          <Col lg='2'>
            <div className="heroImgBox">
              <img src={heroImg} alt="" />
            </div>
          </Col>
          <Col lg='2'>
            <div className="heroImgBox mt-4">
              <video src={heroVideo} alt="" controls />
            </div>
          </Col>
          <Col lg='2'>
            <div className="heroImgBox mt-5">
              <img src={heroImg02} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>

      <Container>
        <Row>
          <SearchBar />
        </Row>
      </Container>

      <br />
      <br />
      <br />
     
      <section className="about-bg">
        <div className="about__content text-center">
          <p className="title section__subheader">ABOUT US</p>
          <h2 className=" subtitle section__header">Discover Our Underground</h2>
          <p className=" px-5 mx-auto desc section__description">
            Welcome to a hidden realm of extraordinary accommodations where
            luxury, comfort, and adventure converge. Our underground hotels
            offer an unparalleled escape from the ordinary, inviting you to
            explore a subterranean world of wonders.
          </p>
          <button className="buton">Book Now</button>
        </div>
      </section> 

      <section className="room__container me-5 pe-5 " id="room">
        <Row className='space d-flex align-items-center'>
          <Col lg='3'>
          <div className="room__card">
            <img src={room1} alt="room" />
            <div className="room__card__details">
              <div>
                <h4>Deluxe Suite</h4>
                <p>Well-appointed rooms designed for guests who desire a more.</p>
                <h3>$399<span>/night</span></h3>
              </div>
            </div>
          </div>
          </Col>
          <Col lg='3'>
          <div className="room__card">
            <img src={room2} alt="room" />
            <div className="room__card__details">
              <div>
                <h4>Family Suite</h4>
                <p>Consist of multiple rooms and a common living area.</p>
                <h3>$599<span>/night</span></h3>
              </div>
            </div>
          </div>
          </Col>
          <Col lg='3'>
            <div className="room__card">
            <img src={room3} alt="room" />
            <div className="room__card__details">
              <div>
                <h4>Luxury Penthouse</h4>
                <p>
                  Top-tier accommodations usually on the highest floors of a
                  hotel.
                </p>
                <h3>$799<span>/night</span></h3>
              </div>
            </div>
            </div>
          </Col>
        </Row>
      </section>

      <section className="about-bg">
        <div className="about__content text-center">
          <p className="title section__subheader">FACILITIES</p>
          <h2 className=" subtitle section__header">Core Features</h2>
          <p className=" px-5 mx-auto desc section__description">
            Welcome to a hidden realm of extraordinary accommodations where
            luxury, comfort, and adventure converge. Our underground hotels
            offer an unparalleled escape from the ordinary, inviting you to
            explore a subterranean world of wonders.
          </p>
          <button className="buton">Book Now</button>
        </div>
      </section> 

      <section className="section__container feature__container" id="feature">
     <Container>
      <Row>
      <Col lg="3">
        <div className="feature__card">
          <span><i class="ri-thumb-up-line"></i></span>
          <h4>Have High Rating</h4>
          <p>
            We take pride in curating a selection of hotels that consistently
            receive high ratings and positive reviews.
          </p>
        </div>
        </Col>
        <Col lg="3">
        <div className="feature__card">
          <span><i class="ri-time-line"></i></span>
          <h4>Quite Hours</h4>
          <p>
            We understand that peace and uninterrupted rest are essential for a
            rejuvenating experience.
          </p>
        </div>
        </Col>
        <Col lg="3">
        <div className="feature__card">
          <span><i class="ri-map-pin-line"></i></span>
          <h4>Best Location</h4>
          <p>
            At our hotel booking website, we take pride in offering
            accommodations in the most prime and sought-after locations.
          </p>
        </div>
        </Col>
        
        
        <Col lg="3">
        <div className="feature__card">
          <span><i class="ri-close-circle-line"></i></span>
          <h4>Free Cancellation</h4>
          <p>
            We understand that travel plans can change unexpectedly, which is
            why we offer the flexibility of free cancellation.
          </p>
        </div>
        </Col>
        </Row>
        <Row>
        <Col lg="3">
        <div className="feature__card">
          <span><i class="ri-wallet-line"></i></span>
          <h4>Payment Options</h4>
          <p>
            Our hotel booking website offers a range of convenient payment
            options to suit your preferences.
          </p>
        </div>
        </Col>
        <Col lg="3">
        <div className="feature__card">
          <span><i class="ri-bookmark-line"></i></span>
          <h4>Bonus Vouchers</h4>
          <p>
            Our hotel booking website offers a range of convenient payment
            options to suit your preferences.
          </p>
        </div>
        </Col>
        <Col lg="3">
        <div className="feature__card">
          <span><i class="ri-coupon-line"></i></span>
          <h4>Special Offers</h4>
          <p>
            Whether you're planning a romantic getaway, or a business trip, our
            carefully curated special offers cater to all needs.
          </p>
        </div>
        </Col>
        <Col lg="3">
        <div className="feature__card">
          <span><i class="ri-restaurant-line"></i></span>
          <h4>Scrumptious Meals </h4>
          <p>
            Our hotel booking website offers a range of convenient payment
            options to suit your preferences.
          </p>
        </div>
        </Col>
      </Row>
      </Container>
      </section>

      <section className="about-bg">
        <div className="about__content text-center">
          <p className="title section__subheader">MENU</p>
          <h2 className=" subtitle section__header">Our Food Menu</h2>
          <p className=" px-5 mx-auto desc section__description">
            Welcome to a hidden realm of extraordinary accommodations where
            luxury, comfort, and adventure converge. Our underground hotels
            offer an unparalleled escape from the ordinary, inviting you to
            explore a subterranean world of wonders.
          </p>
          <button className="buton">Book Now</button>
        </div>
      </section> 
      <Container>
        <Row className='d-flex align-items-center'>
        <Col lg="6">
        <ul class="menu__items">
          <li>
            <img src={menu1} alt="menu" />
            <div class="menu__details">
              <h4>Fggs & Bacon</h4>
              <p>
                It is a culinary innovation that puts a unique spin on the
                beloved breakfast combination.
              </p>
            </div>
          </li>
          <li>
            <img src={menu2} alt="menu" />
            <div class="menu__details">
              <h4>Tea or Coffee</h4>
              <p>
                A classic choice for your daily dose of comfort and calmness.
              </p>
            </div>
          </li>
          <li>
            <img src={menu3} alt="menu" />
            <div class="menu__details">
              <h4>Chia Oatmeal</h4>
              <p>
                Our Chia Oatmeal is a wholesome nutrient-packed breakfast
                delight.
              </p>
            </div>
          </li>
          </ul>
        </Col>
        <Col lg="6">
          <ul class="menu__items">
          <li>
            <img src={menu4} alt="menu" />
            <div class="menu__details">
              <h4>Fruit Parfait</h4>
              <p>
                Our Fruit Parfait is a delightful culinary masterpiece of
                freshness and flavor.
              </p>
            </div>
          </li>
          <li>
            <img src={menu5} alt="menu" />
            <div class="menu__details">
              <h4>Marmalade Selection</h4>
              <p>
                Our Marmalade Selection is a delectable medley of vibrant,
                handcrafted citrus preserves.
              </p>
            </div>
          </li>
          <li>
            <img src={menu6} alt="menu" />
            <div class="menu__details">
              <h4>Cheese Plate</h4>
              <p>
                Our cheese plate is a masterpiece that celebrates rich and
                diverse world of cheeses.
              </p>
            </div>
          </li>
          </ul>
          </Col>
        </Row>
        </Container>
        
        <Container>
        <div class="menu__images d-flex">
          <img src={menu7} className='pic' alt="menu" />
          <img src={menu8} className='pic' alt="menu" />
          <img src={menu9} className='pic'  alt="menu" />
        </div>
        </Container>
    </>
    
  )
}

export default Hotels
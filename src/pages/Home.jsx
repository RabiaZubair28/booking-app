import React from 'react'
import "../styles/hotels-styles/home.css";
import '../styles/hotels-styles/hotels.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import about from '../hotels-images/TRAVEL.jpeg';
import { Link } from 'react-router-dom';
import khi from '../hotels-images/khi.jpeg';
import khi2 from '../hotels-images/khi2.jpeg';
import lhr from '../hotels-images/lhr.jpeg';
import lhr2 from '../hotels-images/lhr2.jpeg';
import isl from '../hotels-images/isl.jpeg';
import isl2 from '../hotels-images/isl2.jpeg';
import qt from '../hotels-images/quetta.jpeg';
import qt2 from '../hotels-images/quetta2.jpeg';
import skd from '../hotels-images/skd.jpeg';
import skd2 from '../hotels-images/skd2.jpeg';
import kash from '../hotels-images/kash.jpeg';
import kash2 from '../hotels-images/kash2.webp';
import suk from '../hotels-images/suk.jpeg';
import hyd from '../hotels-images/hyd.jpeg';

const Home = () => {
  return (
    <div>
         
    <div className="home">
        <div className="content">
            <h5>RAW - <span style={{color:'#ffa500'}}>The Explorers</span></h5>
            <h1>Visit <span className="changecontent"></span></h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, nisi.</p>
            <button className='buton'>Book Place</button>
        </div>
    </div>
    <section className="about" id="about">
      <div className="container">

        <div className="row">

          <div className="col-md-6 py-3 py-md-0">
            <div className="card">
              <img src={about} alt="" />
            </div>
          </div>

          <div className="col-md-6 py-3 py-md-0">
            <br /><br />
            <h2>How Travel Agency Work</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident perferendis dolorem, numquam earum at nam beatae voluptate natus consectetur facere, saepe cupiditate ut exercitationem deserunt, facilis quam perspiciatis autem iure illo harum minima. Quas, vitae aperiam laudantium alias asperiores nulla rerum, nihil eveniet perferendis sint illum accusamus officiis aliquam nam.</p>
            <button id="about-btn" className='buton'>Read More...</button>
          </div>

        </div>

      </div>
    </section> 

    <section className="about-bg">
        <div className="about__content text-center">
          <p className="title section__subheader">PACKAGES</p>
          <h2 className=" subtitle section__header">Seamless Exploration</h2>
          <p className=" px-5 mx-auto desc section__description">
            Welcome to a hidden realm of extraordinary accommodations where
            luxury, comfort, and adventure converge. Our underground hotels
            offer an unparalleled escape from the ordinary, inviting you to
            explore a subterranean world of wonders.
          </p>
          <button className="buton">Book Now</button>
        </div>
      </section> 
      
    <section className="packages" id="packages">
    
        

      <ul class="cards" >
      <li>
    <Link href="" class="card">
      <img src={suk} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
                
          <img class="card__thumb" src={suk} alt="" />
                   
        </div>
        <h4 className='city'>Sukkur</h4>
        <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
        <h5 className='price'>Price: 600/-</h5>
      </div>
    </Link>
  </li>
  <li>
    <Link href="" class="card">
      <img src={hyd} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
                
          <img class="card__thumb" src={hyd} alt="" />
                   
        </div>
        <h4 className='city'>Hyderabad</h4>
        <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
        <h5 className='price'>Price: 800/-</h5>
      </div>
    </Link>
  </li>
    <li>
    <Link href="" class="card">
      <img src={khi} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
             
          <img class="card__thumb" src={khi} alt="" />         
        </div>
        <h4 className='city'>Karachi</h4>
        <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
        <h5 className='price'>Price: 800/-</h5>
      </div>
    </Link>
  </li> 
  <li>
    <Link href="" class="card">
      <img src={lhr} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
                
          <img class="card__thumb" src={lhr} alt="" />
                   
        </div>
        <h4 className='city'>Lahore</h4>
        <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
        <h5 className='price'>Price: 1000/-</h5>
      </div>
    </Link>
  </li> 
  <li>
    <Link href="" class="card">
      <img src={isl} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
               
          <img class="card__thumb" src={isl} alt="" />
                   
        </div>
        <h4 className='city'>Islamabad</h4>
        <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
        <h5 className='price'>Price: 1200/-</h5>
      </div>
    </Link>
  </li> 
  <li>
    <Link href="" class="card">
      <img src={skd} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">               
          <img class="card__thumb" src={skd} alt="" />      
        </div>
        <h4 className='city'>Skardu</h4>
        <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
        <h5 className='price'>Price: 500/-</h5>
      </div>
    </Link>
  </li>  
  <li>
    <Link href="" class="card">
      <img src={qt} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
  
          <img class="card__thumb" src={qt} alt="" />
                  
        </div>
        <h4 className='city'>Quetta</h4>
        <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
        <h5 className='price'>Price: 400/-</h5>
      </div>
    </Link>
  </li> 
  <li>
    <Link href="" class="card">
      <img src={kash} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
                
          <img class="card__thumb" src={kash} alt="" />
                  
        </div>
        <h4 className='city'>Kashmir</h4>
        <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
        <h5 className='price'>Price: 2000/-</h5>
      </div>
    </Link>
  </li>  
   
</ul>

    </section>

    <section className="about-bg">
        <div className="about__content text-center">
          <p className="title section__subheader">SERVICES</p>
          <h2 className=" subtitle section__header">Tailored Adventures</h2>
          <p className=" px-5 mx-auto desc section__description">
            Welcome to a hidden realm of extraordinary accommodations where
            luxury, comfort, and adventure converge. Our underground hotels
            offer an unparalleled escape from the ordinary, inviting you to
            explore a subterranean world of wonders.
          </p>
          <button className="buton">Book Now</button>
        </div>
      </section> 
    <section className="services" id="services">
      <div className="container">


        <div className="row" >

          <div className="col-md-4 py-3 py-md-0">

            <div className="card">
              <i class="ri-hotel-line"></i>
              <div className="card-body">
                <h3>Affordable Hotel</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eaque.</p>
              </div>
            </div>

          </div>
          <div className="col-md-4 py-3 py-md-0">

            <div className="card">
              <i class="ri-restaurant-line"></i>
              <div className="card-body">
                <h3>Food & Drinks</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eaque.</p>
              </div>
            </div>

          </div>
          <div className="col-md-4 py-3 py-md-0">

            <div className="card">
              <i class="ri-shield-flash-line"></i>
              <div className="card-body">
                <h3>Safty Guide</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eaque.</p>
              </div>
            </div>

          </div>



        </div>


        <div className="row" >

          <div className="col-md-4 py-3 py-md-0">

            <div className="card">
              <i class="ri-globe-line"></i>
              <div className="card-body">
                <h3>Around The World</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eaque.</p>
              </div>
            </div>

          </div>
          <div className="col-md-4 py-3 py-md-0">

            <div className="card">
              <i class="ri-plane-line"></i>
              <div className="card-body">
                <h3>Fastest Travel</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eaque.</p>
              </div>
            </div>

          </div>
          <div className="col-md-4 py-3 py-md-0">

            <div className="card">
              <i class="ri-tent-line"></i>
              <div className="card-body">
                <h3>Adventures</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eaque.</p>
              </div>
            </div>

          </div>



        </div>

      </div>
    </section>
    
    <section className="about-bg">
        <div className="about__content text-center">
          <p className="title section__subheader">GALLERY</p>
          <h2 className=" subtitle section__header">Captivating Journeys</h2>
          <p className=" px-5 mx-auto desc section__description">
            Welcome to a hidden realm of extraordinary accommodations where
            luxury, comfort, and adventure converge. Our underground hotels
            offer an unparalleled escape from the ordinary, inviting you to
            explore a subterranean world of wonders.
          </p>
          <button className="buton">Book Now</button>
        </div>
      </section> 

    <section className="gallary" id="gallary">
      <div className="container">

        

        <div className="row">
          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <img src={khi2} alt="" height="230px" />
            </div>
          </div>
          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <img src={lhr2} alt="" height="230px" />
            </div>
          </div>
          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <img src={isl2} alt="" height="230px" />
            </div>
          </div>
        </div>


        <div className="row">
          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <img src={qt2} alt="" height="230px" />
            </div>
          </div>
          <div className="col-md-4 py-3 py-md-0">
            <div className="card">
              <img src={skd2} alt="" height="230px" />
            </div>
          </div>
          <div class="col-md-4 py-3 py-md-0">
            <div class="card">
              <img src={kash2} alt="" height="230px" />
            </div>
          </div>
        </div>

      </div>
    </section>
  

    </div>
  )
}

export default Home
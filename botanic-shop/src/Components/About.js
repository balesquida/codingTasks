
import React from 'react';
import { Figure } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import storeLogo from './brandImg/Logo.jpg'
import storeOutside from './brandImg/outside.png'
import storeInside from './brandImg/inside.jpg'

function About() {
  return (
    <div>
      {/* Section for the store logo and description using bootstrap*/}
      <Figure className='about'>
        <Figure.Image
          width={120}
          height={120}
          alt="Store Logo"
          src={storeLogo} /* Store logo image source*/
          className='ourStore'
        />
        <Figure.Caption className='ourStore'>
          <h3>Our Store</h3>
          <p>Welcome to our store! Nature gives us life, inspiration, and materials. We create thanks to it, and it is always present in our universe. Our color inspiration comes from the leaves of the trees, nature ...
          Universality is our way of life, creating collections adapted to all tastes.</p>
        </Figure.Caption>
      </Figure>

      {/* Section for the store front image and description */}
      <Figure className='caption'>
        <Figure.Image
          width={271}
          height={280}
          alt="Store Front"
          src={storeOutside} /*Store front image source*/
        />
        <Figure.Caption>
          <h4>Our Store Front</h4>
          <p>Take a look at our beautiful store front where you can find a variety of handmade jewelry pieces.<br></br>
          At Botanic, we understand that every piece of jewelry tells a unique story. Our display is designed to capture the essence of elegance and glamour, offering an unparalleled selection of exceptional pieces.</p>
        </Figure.Caption>
      </Figure>

      {/* Section for the store interior image and description */}
      <Figure className='caption'>
        <Figure.Image
          width={271}
          height={280}
          alt="Store Interior"
          src={storeInside} /* Store interior image source*/
        />
        <Figure.Caption>
          <h4>Our Interior</h4>
          <p>Step inside and explore our range of exquisite jewelry in a welcoming and cozy atmosphere. <br></br>
          We work with the finest materials and artisans to ensure excellence in every detail. Each piece is a work of art, created to highlight your personality and style. Our team of experts is here to help you find the perfect piece for any occasion.</p>
        </Figure.Caption>
      </Figure>

      {/* Section for contact information */}
      <div className='contact'>
        <span className='contactInfo'>Contact Us
          Email: info@botanic.com
          Phone: +123 456 789</span>
      </div>
    </div>
  );
}


export default About;

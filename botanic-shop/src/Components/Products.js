
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownButton, Card, Button } from 'react-bootstrap';
import jewelry1 from './products/jewelry1.png'; 
import jewelry2 from './products/jewelry2.png'; 
import jewelry3 from './products/jewelry3.png'; 
import jewelry4 from './products/jewelry4.png'; 
import jewelry5 from './products/jewelry5.png'; 
import jewelry6 from './products/jewelry6.png'; 
import jewelry7 from './products/jewelry7.png'; 
import jewelry8 from './products/jewelry8.png'; 
import jewelry9 from './products/jewelry9.png';
import jewelry10 from './products/jewelry10.png';

/*Create an array of product objects, each containing details like image, title, description, price, and available colors */
const productsArray = [
  {
    image: jewelry1,
    title: 'Cherry Blossoms in Bloom Branch Pendant',
    description: 'Handmade necklace | Intricate and delicate, super lightweight silver monstera leaf necklace that beautifully reflect light.',
    price: '£100.00',
    colors: ['Pink', 'Blue', 'Green']
  },
  {
    image: jewelry2,
    title: 'Cherry Blossom in Bloom Flower Pendant',
    description: 'The cherry blossom represents the overwhelming beauty of life, making this single cherry blossom with a 5mm round stone of your choice a gorgeous gift for your bridesmaids.',
    price: '£130.00',
    colors: ['Red', 'Yellow', 'Green']
  },
  {
    image: jewelry3,
    title: 'October Birth Flower Disc Necklace with Gemstone',
    description: 'Your necklace will be handcrafted in sterling silver, white, yellow, or rose gold and is available with a selection of chain lengths for a comfortable fit.',
    price: '£120.00',
    colors: ['Red', 'Blue', 'Orange']
  },
  {
    image: jewelry4,
    title: 'Love and Kisses 3 Gemstone Pendant',
    description: 'Celebrate the love of your life or those closest to you with a sparkling pendant featuring two or three 4mm heart-shaped birthstones.',
    price: '£140.00',
    colors: ['Grey', 'Blue', 'Green']
  },
  {
    image: jewelry5,
    title: 'Set of earings',
    description: 'Set of earings designed in Mexico inspired by local flora',
    price: '£150.00',
    colors: ['Red', 'Blue', 'Green']
  },
  {
    image: jewelry6,
    title: 'Wisdom Tree Necklace and Earrings Set',
    description: 'Sterling Silver Jewelry Set Tree of Life Pendant Necklace and Earrings',
    price: '£70.00',
    colors: ['Red', 'Blue', 'Green']
  },
  {
    image: jewelry7,
    title: 'Shiny Leaf Shape Long',
    description: 'Bridal Jewelry',
    price: '£270.00',
    colors: ['Red', 'Blue', 'Green']
  },
  {
    image: jewelry8,
    title: 'Carrots necklace jewellery',
    description: 'Handmade Resin carrots necklace on 18k gold or sterling silver chain',
    price: '£60.00',
    colors: ['Red', 'Blue', 'Green']
  },
  {
    image: jewelry9,
    title: 'Curved Leaf Charms',
    description: 'Channel the enchanting energies of the mint leaf and fill it with the birthstones of your loved ones to keep them embraced in your eternal love.',
    price: '£135.00',
    colors: ['Red', 'Blue', 'Yellow']
  },
  {
    image: jewelry10,
    title: 'Roots Of Love 5-Stone Family Tree Necklace',
    description: ' Featuring a decorative leaf design and 5 round gemstones sparkling along the centre branch of the tree, this pendant can be personalised with special birthstones to represent the ones you love. ',
    price: '£120.00',
    colors: ['Red', 'Blue', 'Silver']
  },
];

/* Define the Products component which receives a setTotalPrice function as a prop */
function Products({ setTotalPrice }) {
  return (
    <div className='products'>
      <h2>Products</h2>
      {/* Display product cards in a flexible, wrapped layout */}
      <div className="d-flex flex-wrap justify-content-around">
        {productsArray.map(product => (
          /* Render a ProductCard for each product in the array */
          <ProductCard key={product.title} product={product} setTotalPrice={setTotalPrice} />
        ))}
      </div>
    </div>
  );
}
/* Define the ProductCard component which represents individual product details*/
function ProductCard({ product, setTotalPrice }) {
 /* Use the useState hook to manage the selected color state*/
  const [selectedColor, setSelectedColor] = useState('Choose Color');

  /* Function to handle the buy button click, updating the total price*/
  const handleBuy = () => {
    setTotalPrice(prevTotal => prevTotal + parseFloat(product.price.replace('£', '')));
  };

  return (
  /* Render a Card component with specific styling for width and margin */
  <Card style={{ width: '18rem', margin: '1rem' }}>
    {/* Display the product image at the top of the card */}
    <Card.Img variant="top" src={product.image} />
    {/* Define the body of the card containing the product details */}
    <Card.Body>
      {/* Display the product title */}
      <Card.Title>{product.title}</Card.Title>
      {/* Display the product description */}
      <Card.Text>{product.description}</Card.Text>
      {/* Display the product price in bold */}
      <Card.Text><strong>{product.price}</strong></Card.Text>
      {/* Render a DropdownButton for selecting product colors */}
      <DropdownButton id="dropdown-basic-button" title={selectedColor}>
        {/* Render dropdown items for each available color */}
        {product.colors.map(color => (
          <Dropdown.Item
            key={color}
            onClick={() => setSelectedColor(color)}
          >
            {color}
          </Dropdown.Item>
        ))}
      </DropdownButton>
      {/* Render a Buy button that triggers the handleBuy function on click */}
      <Button variant="primary" className="mt-2" onClick={handleBuy}>Buy</Button>
    </Card.Body>
  </Card>
);
}

export default Products;

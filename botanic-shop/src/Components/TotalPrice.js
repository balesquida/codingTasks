import React, { useEffect, useState } from 'react';


function TotalPrice({ totalPrice }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (totalPrice > 0) {
      setVisible(true);
    }
  }, [totalPrice]);

  return (
    visible && (
      <div className='total-price'>
        <h2>Total price: £{totalPrice.toFixed(2)}</h2>
      </div>
    )
  );
}

export default TotalPrice;

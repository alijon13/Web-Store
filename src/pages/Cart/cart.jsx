import React, { useEffect } from 'react';
import { getCart } from '../../api/home/home';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
  const dispatch = useDispatch();

  const cart = useSelector((store) => store.home.cart);
  console.log(cart);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  return (
    <div className='pt-[120px] w-[73%] m-auto'>
      <h1>Cart</h1>

      <div className="">
        {
          cart?.map((e) => {
            return (
              <div key={e.productId} className="">
                <h1>{e.productName}</h1>
              </div>
            ); 
          })
        }
      </div>
    </div>
  );
};

export default Cart;

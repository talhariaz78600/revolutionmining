"use client"
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Addtocart = ({ item }) => {
  const data = usePathname();
  const router = useRouter();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Initialize the cart in localStorage if it doesn't exist
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log(savedCart);
    setCart(savedCart);
  }, []);

  const addToCart = () => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    let datapro = savedCart.find((product) => product._id === item._id);

    if (datapro) {
      toast.success(
        <div>
          <p>This product is already in your cart!</p>
          <button
            className="product-form__submit mt-4 button button--full-width button--secondary"
            onClick={() => {
              router.push('/cart');
            }}
          >
            Go to Cart
          </button>
        </div>
      );
    } else {
      const newCart = [...savedCart, item];
      localStorage.setItem('cart', JSON.stringify(newCart));
      setCart(newCart);
      toast.success(
        <div>
          <p>Product added successfully to your cart!</p>
          <button
            className="product-form__submit mt-4 button button--full-width button--secondary"
            onClick={() => {
              router.push('/cart');
            }}
          >
            Go to Cart
          </button>
        </div>
      );
      router.push(`${data}?itemadd=${newCart.length}`);
    }
  };

    return (
        <div>
            <div className="product-form__buttons">
                <button type="submit" name="add"
                    className="product-form__submit mt-4 button button--full-width button--secondary"
                    disabled={item.status} onClick={addToCart}>
                    {item.status === false ? <span>Buy & Host</span> : <span>Sold out</span>}
                    <div className="loading-overlay__spinner hidden">
                        <svg aria-hidden="true" focusable="false"
                            role="presentation" className="spinner" viewBox="0 0 66 66"
                            xmlns="http://www.w3.org/2000/svg">
                            <circle className="path" fill="none" strokeWidth="6"
                                cx="33" cy="33" r="30"></circle>
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    );
}

export default Addtocart;

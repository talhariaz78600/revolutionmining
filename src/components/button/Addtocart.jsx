"use client"
import React from 'react';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
// import { useState } from 'react';
import { toast } from 'react-toastify';
const Addtocart = ({item}) => {

    const data = usePathname()
    const router=useRouter()
    const addToCart = () => {
        const savedCart = JSON.parse(localStorage.getItem('cart'));
        let datapro=null;
        if(savedCart){
            datapro=savedCart.find((product)=>product._id===item._id)
        }
       
        if(datapro){
            toast.success(<div className=''>
            <p>This product already added in your cart!</p>
            <button className='product-form__submit mt-4 button button--full-width button--secondary' onClick={()=>{
                router.push('/cart')
            }}>Go to Cart</button>
        </div>)
            // localStorage.setItem('cart', JSON.stringify([]));
        }else{  
            savedCart.push(item);
            localStorage.setItem('cart', JSON.stringify(savedCart));
            router.push(`${data}?itemadd=${savedCart.length}`)
            toast.success(
                <div className=''>
                    <p>Product added successfully to your cart!</p>
                    <button className='product-form__submit mt-4 button button--full-width button--secondary' onClick={()=>{
                        router.push('/cart')
                    }}>Go to Cart</button>
                </div>
            );
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

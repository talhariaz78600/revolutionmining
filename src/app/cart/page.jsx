import React from 'react';
// import Empty from '@/components/cart/Empty';
import CartProducts from '@/components/cart/CartProducts';
import { Suspense } from 'react';
const page = () => {
    return (
        <div>
            {/* <Empty/> */}
            <Suspense>
                <CartProducts />
            </Suspense>
        </div>
    );
}

export default page;

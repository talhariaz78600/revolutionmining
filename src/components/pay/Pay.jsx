import React from 'react';
const Pay = ({cart,total}) => {
    return (
        <div class="">
            <div class="flex items-start flex-col gap-6 xl:flex-row ">
                <div class="w-full  flex items-start flex-col justify-center">
                    <div class="border border-gray-200 rounded-3xl  w-[320px] md:w-[700px] lg:w-[500px]  mt-6 md:mt-40 group transition-all duration-500 hover:border-gray-400 ">
                        <h2
                            class="font-manrope font-bold text-3xl leading-10 my-4 text-white mx-4 border-b border-gray-200 ">
                            Order Summary
                        </h2>
                        <div class="data py-6 border-b m-4 border-gray-200">
                            <div class="flex items-center justify-between gap-4 mb-5">
                                <p class="font-normal text-lg leading-8 text-gray-400 transition-all duration-500 group-hover:text-gray-700">Total products</p>
                                <p class="font-medium text-lg leading-8 text-gray-400">{cart}</p>
                            </div>
                            {/* <div class="flex items-center justify-between gap-4 mb-5">
                                <p class="font-normal text-lg leading-8 text-gray-400 transition-all duration-500 group-hover:text-gray-700">Shipping</p>
                                <p class="font-medium text-lg leading-8 text-gray-600">$40.00</p>
                            </div> */}
                            <div class="flex items-center justify-between gap-4 ">
                                <p class="font-normal text-lg leading-8 text-gray-400 transition-all duration-500 group-hover:text-gray-700 ">Coupon Code</p>
                                <p class="font-medium text-lg leading-8 text-emerald-500">#APPLIED</p>
                            </div>
                        </div>
                        <div class="total flex items-center justify-between pt-6 m-4">
                            <p class="font-normal text-xl leading-8 text-white ">Total</p>
                            <h5 class="font-manrope font-bold text-2xl leading-9 text-indigo-600">${total}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pay;

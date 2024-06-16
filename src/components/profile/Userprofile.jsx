"use client"
import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
const Userprofile = () => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(false);
    const router=useRouter();
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const userProfile = localStorage.getItem('userprofile');
            const data = JSON.parse(userProfile)
            console.log(data);
            if (data && data.sessionExpiration > new Date()) {
                setUser(data);
            } else {
                localStorage.removeItem('userprofile')
                setUser(null);
                // localStorage.removeItem("userdata")
            }
        }
    }, []);

    const onchang = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const submit = async (e) => {
        e.preventDefault();
        setLoader(true);
        console.log("userdata updated successfully", user)
        console.log(user.id);
        try {
            const response = await axios.post(`https://revolutionbackend.vercel.app/api/users/${user.id}/update-profile`, user);
            if (response.status === 200) {
                toast.success(response.data.message);
                localStorage.setItem("userprofile", JSON.stringify({
                    firstname: response.data.currentUser.firstname, lastname: response.data.currentUser.lastname, email: response.data.currentUser.email
                    , sessionExpiration: response.data.currentUser.sessionExpiration,
                    id: response.data.currentUser._id,
                    mobileNumber: response.data.currentUser.mobileNumber ? response.data.currentUser.mobileNumber : ""
                }));
                setUser({firstname:response.data.currentUser.firstname,lastname:response.data.currentUser.lastname,email:response.data.currentUser.email,sessionExpiration:response.data.currentUser.sessionExpiration,mobileNumber:response.data.currentUser.mobileNumber,id:response.data.currentUser._id});
                setLoader(false);
            }
            else {
                toast.success(response.data.message);
                setLoader(false);
            }

        } catch (error) {
            toast.error(error.message);
            console.log(error);
            setLoader(false);
        }

    }

    return (
        <div>
            {user ? <div className="flex items-center w-full justify-center" style={{ backgroundColor: "#ffffff1a" }}>
                <form onSubmit={submit} className=" rounded-lg shadow-lg py-20 w-full md:px-20">
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="first-name">
                            First name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="firstname"
                            type="text"
                            name='firstname'
                            placeholder="First name"
                            value={user.firstname}
                            onChange={onchang}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="last-name">
                            Last name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="lastname"
                            type="text"
                            placeholder="Last name"
                            name='lastname'
                            onChange={onchang}
                            value={user.lastname}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                            Email address
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            name='email'
                            placeholder="Email address"
                            onChange={onchang}
                            value={user.email}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="phone-number">
                            Phone number
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="phone-number"
                            type="tel"
                            placeholder="Phone number"
                            value={user.mobileNumber}
                            onChange={onchang}
                            name='mobileNumber'
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2  px-2 md:px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                                         {loader ? <div
                className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-secondary motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status">
                <span
                  className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Loading...</span
                >
              </div> : "Update account"}
                        </button>
                        <button
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={()=>{
                                router.push("/")
                            }}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div> : ""}
        </div>
    );
}

export default Userprofile;





import React from 'react';
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-gray-100 to-blue-100 font-poppins text-gray-700"
>
         <Navbar></Navbar>
         <main className='pt-20 px-4 md:px-8'>
            <Outlet></Outlet>
         </main>
         <Footer></Footer>
        </div>
    );
};

export default RootLayout;